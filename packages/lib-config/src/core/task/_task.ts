import { Container } from '@lib/backend/core/utils/Container/Container';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { packages } from '@lib/backend/file/utils/packages/packages';
import type { _TaskConfigModel, TaskConfigModel } from '@lib/config/core/task/task.models';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TaskRegistry } from '@tool/task/core/utils/taskRegistry/taskRegistry';
import { existsSync } from 'fs';

export const _task = ({ packageConfig, taskExtension }: TaskConfigModel): _TaskConfigModel => {
  const _taskRegistry = Container.get(TaskRegistry);
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
        const { name } = await prompt([
          { key: 'name', options: [
            ...Object.keys(_taskRegistry.aliases),
            ...Object.keys(_taskRegistry.registry),
          ], type: PROMPT_TYPE.LIST },
        ]);
        return _taskRegistry.get(name)();
      },
    },
  ].filter(Boolean) as Array<TaskParamsModel>;
  _tasks.forEach(_taskRegistry.register);
};
