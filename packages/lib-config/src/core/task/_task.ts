import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { packages } from '@lib/backend/file/utils/packages/packages';
import type { _TaskConfigModel, TaskConfigModel } from '@lib/config/core/task/task.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { runTask } from '@tool/task/core/utils/runTask/runTask';
import { taskRegistry } from '@tool/task/core/utils/taskRegistry/taskRegistry';
import { existsSync } from 'fs';
import { task as register } from 'gulp';
import kebabCase from 'lodash/kebabCase';

const _aliasMap: Record<string, string> = {};

export const _task = ({ packageConfig, taskExtension }: TaskConfigModel): _TaskConfigModel => {
  const _tasks = [
    // Task files
    ...fromGlobs({
      globs: [`*/src/**/*.${taskExtension}`],
      isAbsolute: true,
      root: fromPackages(),
    }).map((path) => require(path).default as TaskParamsModel),

    // Package tasks
    ...packages.reduce((result, target) => {
      const _path = fromPackages(target, packageConfig as string);
      if (existsSync(_path)) {
        const _tasks = require(_path).default as Array<TaskParamsModel>;
        return [...result, ..._tasks.map((task) => ({ ...task, target }))];
      }
      return result;
    }, [] as Array<TaskParamsModel>),

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
    if (_aliasMap[_alias] || _taskRegistry[_name]) {
      throw new DuplicateError(`${_name} (${_alias}) exists`);
    }
    _aliasMap[_alias] = _name;
    [_alias, _name].forEach((name) =>
      register(name, async () => runTask({ ...task, name, target: _target })),
    );
  });
};
