// COMPLETE
import { existsSync } from 'fs';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '#lib-backend/file/utils/joinPaths/joinPaths';
import { packages } from '#lib-backend/file/utils/packages/packages';
import { type _TaskConfigModel, type TaskConfigModel } from '#lib-config/core/task/task.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { requireInterop } from '#lib-shared/core/utils/requireInterop/requireInterop';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { TaskRunner } from '#tool-task/core/utils/TaskRunner/TaskRunner';

export const _task = ({ packageFilename, taskExtension }: TaskConfigModel): _TaskConfigModel => {
  const taskRunner = Container.get(TaskRunner);

  const tasks = filterNil([
    // Task files
    ...fromGlobs([joinPaths({ extension: taskExtension, paths: ['*/src/**/*'] })], {
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
            options: [...Object.keys(taskRunner.aliases), ...Object.keys(taskRunner.registry)],
            type: PROMPT_TYPE.LIST,
          },
        ]);
        return taskRunner.get(name)();
      },
    },
  ]);

  tasks.forEach(taskRunner.register);
};
