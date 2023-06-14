import type { _TaskConfigModel, TaskConfigModel } from '#lib-config/core/task/task.models';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { TaskRegistry } from '#tool-task/core/utils/TaskRegistry/TaskRegistry';
import { existsSync } from 'fs';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { packages } from '#lib-backend/file/utils/packages/packages';

export const _task = ({ packageConfig, taskExtension }: TaskConfigModel): _TaskConfigModel => {
  const taskRegistry = Container.get(TaskRegistry);
  const tasks = [
    // Task files
    ...fromGlobs({
      globs: [`*/src/**/*.${taskExtension}`],
      isAbsolute: true,
      root: fromPackages(),
    }).map((path) => require(path).default as TaskParamsModel),

    // Package tasks
    ...packages.reduce((result, target) => {
      const path = fromPackages(target, packageConfig as string);
      if (existsSync(path)) {
        const tasks = require(path).default as Array<TaskParamsModel>;
        return [...result, ...tasks.map((task) => ({ ...task, target }))];
      }
      return result;
    }, [] as Array<TaskParamsModel>),

    // All tasks
    {
      name: 'default',

      task: async () => {
        const { name } = await prompt([
          {
            key: 'name',
            options: [...Object.keys(taskRegistry.aliases), ...Object.keys(taskRegistry.registry)],
            type: PROMPT_TYPE.LIST,
          },
        ]);
        return taskRegistry.get(name)();
      },
    },
  ].filter(Boolean) as Array<TaskParamsModel>;

  tasks.forEach(taskRegistry.register);
};
