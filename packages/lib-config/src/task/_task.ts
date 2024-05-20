// COMPLETE
import { Container } from '@lib/backend/core/utils/Container/Container';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { type _TaskConfigModel, type TaskConfigModel } from '@lib/config/task/task.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { requireInterop } from '@lib/shared/core/utils/requireInterop/requireInterop';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';
import { existsSync } from 'fs';

export const _task = ({ packageFilename, taskExtension }: TaskConfigModel): _TaskConfigModel => {
  const taskRunner = Container.get(TaskRunner);

  const tasks = filterNil([
    // Task files
    ...fromGlobs([joinPaths(['*/src/**/*'], { extension: taskExtension })], {
      isAbsolute: true,
      root: fromPackages(),
    }).map((path) => requireInterop<TaskParamsModel<unknown>>(path)),

    // Package tasks
    ...packages.reduce<Array<TaskParamsModel<unknown>>>((result, target) => {
      const path = fromPackages(target, packageFilename);
      if (existsSync(path)) {
        const tasks = requireInterop<Array<TaskParamsModel<unknown>>>(path);
        return [...result, ...tasks.map((task) => ({ ...task, target }))];
      }
      return result;
    }, []),

    // All tasks
    {
      name: 'default',

      task: [
        async () => {
          const { name } = await prompt<{ name: string }>([
            {
              key: 'name',
              options: [...Object.keys(taskRunner.aliases), ...Object.keys(taskRunner.registry)],
              type: PROMPT_TYPE.LIST,
            },
          ]);
          return taskRunner.getTask(name)();
        },
      ],
    },
  ]);

  tasks.forEach(taskRunner.register);
};
