// COMPLETE
import { existsSync } from 'fs';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { packages } from '#lib-backend/file/utils/packages/packages';
import { type _TaskConfigModel, type TaskConfigModel } from '#lib-config/core/task/task.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { joinExtension } from '#lib-shared/core/utils/joinExtension/joinExtension';
import { requireInterop } from '#lib-shared/core/utils/requireInterop/requireInterop';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { TaskRegistry } from '#tool-task/core/utils/TaskRegistry/TaskRegistry';

export const _task = ({ packageFilename, taskExtension }: TaskConfigModel): _TaskConfigModel => {
  const taskRegistry = Container.get(TaskRegistry);

  const tasks = filterNil([
    // Task files
    ...fromGlobs({
      globs: [joinExtension('*/src/**/*', taskExtension)],
      isAbsolute: true,
      root: fromPackages(),
    }).map((path) => requireInterop<TaskParamsModel>(path)),

    // Package tasks
    ...packages.reduce<Array<TaskParamsModel>>((result, target) => {
      const path = fromPackages(target, packageFilename);
      if (existsSync(path)) {
        const tasks = requireInterop<Array<TaskParamsModel>>(path);
        return [...result, ...tasks.map((task) => ({ ...task, target }))];
      }
      return result;
    }, []),

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
