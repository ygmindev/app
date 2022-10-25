import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { setup } from '@lib/shared/environment/utils/setup/setup';
import { error, info, warn } from '@lib/shared/logging/utils/logger/logger';
import { _register } from '@tool/task/core/utils/register/_register';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type {
  RegisterParamsModel,
  RegisterResultsModel,
  TaskResultsModel,
} from '@tool/task/core/utils/register/register.models';
import { registry } from '@tool/task/core/utils/registry/registry';
import { kebabCase } from 'lodash';

const _handleResult = async (
  name: string,
  task: () => Promise<TaskResultsModel>,
): Promise<void> => {
  try {
    const result = await task();
    switch (result.status) {
      case TASK_RESULTS_STATUS_TYPE.SUCCESS: {
        info(`${name} completed`);
        break;
      }
      case TASK_RESULTS_STATUS_TYPE.WARNING: {
        warn(`${name} completed with warnings`);
        break;
      }
      case TASK_RESULTS_STATUS_TYPE.ERROR: {
        error(`${name} failed`);
        break;
      }
      default:
        break;
    }
  } catch (e) {
    error(`${name} failed with error: ${(e as Error).stack}`);
  }
};

export const register = <TOptions = object>({
  cleanups,
  dependencies,
  environment,
  name,
  options,
  overrides,
  target,
  task,
}: RegisterParamsModel<TOptions>): RegisterResultsModel => {
  const _registry = registry();
  const _target = target && kebabCase(target);
  const _name = [_target, kebabCase(name)].filter(Boolean).join('-');

  const _alias = kebabCase(_name)
    .split('-')
    .map((p) => p.charAt(0))
    .join('');

  if (_registry[_alias]) {
    throw new DuplicateError(`${_alias} existis`);
  }

  const _getTaskByName = (name: string): (() => Promise<void>) => {
    const _registry = registry();
    const task = _registry[name];
    if (task) {
      return async () => {
        await task();
      };
    }
    throw new NotFoundError(name);
  };

  const _task = async (): Promise<void> => {
    if (cleanups) {
      const onClosePromise = cleanups.map(_getTaskByName);
      ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach((event) =>
        process.on(event, async () => {
          await sequence(onClosePromise);
          process.exit();
        }),
      );
    }

    setup({ environment: environment || (process.env.NODE_ENV as EnvironmentModel), overrides });

    if (dependencies) {
      const dependenciesPromise = dependencies.map(_getTaskByName);
      await sequence(dependenciesPromise);
    }

    const root = _target ? fromPackages(_target) : fromRoot();
    process.chdir(root);
    await _handleResult(_name, async () =>
      task({ name: _name, options: options || ({} as TOptions), root, target: _target }),
    );
  };

  _register({ name: _alias, task: _task });
  _register({ name: _name, task: _task });

  return { alias: _alias, name: _name };
};
