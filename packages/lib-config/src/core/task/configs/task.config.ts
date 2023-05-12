import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { _taskConfig } from '@lib/config/core/task/_task';
import { taskConfigParams } from '@lib/config/core/task/params/task.params';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { error, info, warn } from '@lib/shared/logging/utils/logger/logger';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel, TaskStatusModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { registry } from '@tool/task/core/utils/registry/registry';
import { existsSync } from 'fs';
import flattenDeep from 'lodash/flattenDeep';
import isString from 'lodash/isString';
import kebabCase from 'lodash/kebabCase';

const { configFile, taskExtension } = taskConfigParams;

const _getTaskByName = (name: string): CallablePromiseModel<TaskStatusModel> => {
  const _registry = registry();
  const _name = kebabCase(name);
  const task = _registry[_name];
  if (task) {
    return task as unknown as CallablePromiseModel<TaskStatusModel>;
  }
  throw new NotFoundError(_name);
};

const _getTask = <TOptions = undefined>({
  environment,
  name,
  onAfter,
  onBefore,
  options,
  overrides,
  target,
  task,
}: TaskParamsModel<TOptions>): Array<{ name: string; task: CallablePromiseModel }> => {
  const _registry = registry();
  const _target = target && kebabCase(target);
  const _name = [_target, kebabCase(name)].filter(Boolean).join('-');
  const _alias = kebabCase(_name)
    .split('-')
    .map((p) => p.charAt(0))
    .join('');

  if (_registry[_alias]) {
    throw new DuplicateError(`${_alias} exists`);
  }

  const _task: CallablePromiseModel = async () => {
    const root = _target ? fromPackages(_target) : fromRoot();
    process.chdir(root);

    setEnvironment({
      environment: environment || (process.env.NODE_ENV as EnvironmentModel),
      overrides,
    });

    let onAfterPromise: CallablePromiseModel | undefined = undefined;
    if (onAfter) {
      onAfterPromise = debounce({
        callback: async () => {
          await sequence(onAfter.map((value) => (isString(value) ? _getTaskByName(value) : value)));
        },
      });
      ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach((event) =>
        process.on(event, async () => {
          onAfterPromise && (await onAfterPromise());
          process.exit();
        }),
      );
    }

    if (onBefore) {
      const onBeforePromise: CallablePromiseModel = async () => {
        await sequence(onBefore.map((value) => (isString(value) ? _getTaskByName(value) : value)));
      };
      await onBeforePromise();
    }

    try {
      const result = await task({
        name: _name,
        options: (options || {}) as TOptions,
        root,
        target: _target,
      });

      onAfterPromise && (await onAfterPromise());

      switch (result.status) {
        case TASK_STATUS.SUCCESS: {
          return info(`${_name} completed`);
        }
        case TASK_STATUS.WARNING: {
          return warn(`${_name} completed with warnings`);
        }
        case TASK_STATUS.ERROR: {
          return error(`${_name} failed`);
        }
        default:
          return;
      }
    } catch (e) {
      error(`${name} failed with error: ${(e as Error).stack}`);
    }
  };

  return [
    { name: _alias, task: _task },
    { name: _name, task: _task },
  ];
};

const _tasks: Array<{ name: string; task: CallablePromiseModel }> = [
  // Task files
  ...fromGlobs({
    globs: [`*/src/**/*.${taskExtension}`],
    isAbsolute: true,
    root: fromPackages(),
  }).map((path) => {
    const task = require(path).default;
    return task && _getTask(task as TaskParamsModel);
  }),

  // Package tasks
  ...packages.map((target) => {
    const path = fromPackages(target, configFile);
    if (existsSync(path)) {
      const tasks: Array<TaskParamsModel<unknown>> = require(path).default;
      return tasks && tasks.map((task) => _getTask({ ...task, target } as TaskParamsModel));
    }
    return null;
  }),

  // All tasks
  {
    name: 'default',

    task: async () => {
      const _registry = registry();
      const { name } = await prompt([
        { key: 'name', options: Object.keys(_registry), type: PROMPT_TYPE.LIST },
      ]);
      return _registry[name]();
    },
  },
];

export const taskConfig = _taskConfig({ tasks: flattenDeep(_tasks) });
