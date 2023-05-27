import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { error, info, warn } from '@lib/shared/logging/utils/logger/logger';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskResultModel } from '@tool/task/core/core.models';
import type {
  RunTaskModel,
  RunTaskParamsModel,
} from '@tool/task/core/utils/runTask/runTask.models';
import { taskRegistry } from '@tool/task/core/utils/taskRegistry/taskRegistry';
import isString from 'lodash/isString';
import kebabCase from 'lodash/kebabCase';

const _getTaskByName = (name: string): CallablePromiseModel<TaskResultModel> => {
  const _taskRegistry = taskRegistry();
  const _name = kebabCase(name);
  const _task = _taskRegistry[_name];
  if (_task) {
    return _task;
  }
  throw new NotFoundError(_name);
};

export const runTask = async <TType = undefined>({
  environment,
  name,
  onAfter,
  onBefore,
  options,
  overrides,
  target,
  root,
  task,
}: RunTaskParamsModel<TType>): RunTaskModel => {
  const _root = root || (target ? fromPackages(target) : fromRoot());
  process.chdir(_root);

  setEnvironment({ environment, overrides });

  const _onAfter =
    onAfter &&
    debounce(async () => {
      await sequence(onAfter.map((value) => (isString(value) ? _getTaskByName(value) : value)));
    });
  _onAfter &&
    ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach((event) =>
      process.on(event, async () => {
        _onAfter && (await _onAfter());
        process.exit();
      }),
    );

  onBefore &&
    (await sequence(onBefore.map((value) => (isString(value) ? _getTaskByName(value) : value))));

  try {
    const { error: _error, message, status } = await task({
      name,
      options: (options || {}) as TType,
      root: _root,
      target: target,
    });

    _onAfter && (await _onAfter());

    switch (status) {
      case TASK_STATUS.SUCCESS: {
        info(`[${name}] ${message || 'completed'}`);
        return true;
      }
      case TASK_STATUS.WARNING: {
        warn(`[${name}] ${message || 'completed with warnings'}`);
        return true;
      }
      default: {
        error(`[${name}] ${_error?.message || message || 'failed'}`);
        return false;
      }
    }
  } catch (e) {
    error(`[${name}] failed: ${(e as Error).stack}`);
    return false;
  }
};
