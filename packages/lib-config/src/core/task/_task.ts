import { existsSync } from 'fs';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { packages } from '#lib-backend/file/utils/packages/packages';
import { type _TaskConfigModel, type TaskConfigModel } from '#lib-config/core/task/task.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { TaskRegistry } from '#tool-task/core/utils/TaskRegistry/TaskRegistry';

export const _task = ({ packageConfig, taskExtension }: TaskConfigModel): _TaskConfigModel => {
  const taskRegistry = Container.get(TaskRegistry);
  const tasks = filterNil([
    // Task files
    ...fromGlobs({
      globs: [`*/src/**/*.${taskExtension}`],
      isAbsolute: true,
      root: fromPackages(),
    }).map((path) => (require(path) as { default: TaskParamsModel }).default),

    // Package tasks
    ...packages.reduce((result, target) => {
      const path = fromPackages(target, packageConfig);
      if (existsSync(path)) {
        const tasks = (require(path) as { default: Array<TaskParamsModel> }).default;
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
  ]);
  tasks.forEach(taskRegistry.register);
};
