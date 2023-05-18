import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { packages } from '@lib/backend/file/utils/packages/packages';
import type { _TaskConfigModel } from '@lib/config/core/task/_task.models';
import taskConfig from '@lib/config/core/task/task';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { runTask } from '@tool/task/core/utils/runTask/runTask';
import { taskRegistry } from '@tool/task/core/utils/taskRegistry/taskRegistry';
import { existsSync } from 'fs';
import { task as register } from 'gulp';
import kebabCase from 'lodash/kebabCase';

const _taskConfig: _TaskConfigModel = () => {
  const _tasks = [
    // Task files
    ...fromGlobs({
      globs: [`*/src/**/*.${taskConfig.taskExtension}`],
      isAbsolute: true,
      root: fromPackages(),
    }).map((path) => require(path).default as TaskParamsModel),

    // Package tasks
    ...(taskConfig.config
      ? packages.map((target) => {
          const _path = fromPackages(target, taskConfig.config as string);
          if (existsSync(_path)) {
            const _tasks = require(_path).default as Array<TaskParamsModel<unknown>>;
            _tasks.map((task) => ({ ...task, target }));
          }
          return null;
        })
      : []),

    // All tasks
    {
      name: 'default',

      task: async () => {
        const _taskRegistry = taskRegistry();
        const { name } = await prompt([
          { key: 'name', options: Object.keys(_taskRegistry), type: PROMPT_TYPE.LIST },
        ]);
        return _taskRegistry[name]();
      },
    },
  ].filter(Boolean) as Array<TaskParamsModel>;

  _tasks.forEach((task) => {
    const _taskRegistry = taskRegistry();
    const _target = task.target && kebabCase(task.target);
    const _name = [_target, kebabCase(task.name)].filter(Boolean).join('-');
    const _alias = kebabCase(_name)
      .split('-')
      .map((p) => p.charAt(0))
      .join('');

    if (_taskRegistry[_alias]) {
      throw new DuplicateError(`${_alias} exists`);
    }

    [_alias, _name].forEach((name) =>
      register(name, async () => runTask({ ...task, name, target: _target })),
    );
  });
};

export default _taskConfig;
