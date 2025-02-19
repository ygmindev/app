import { Container } from '@lib/shared/core/utils/Container/Container';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type _TaskConfigModel, type TaskConfigModel } from '@lib/config/task/task.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { requireInterop } from '@lib/shared/core/utils/requireInterop/requireInterop';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';
import { existsSync } from 'fs';
import reduce from 'lodash/reduce';

export const _task = ({
  configFilename,
  packageDirs,
  taskExtension,
}: TaskConfigModel): _TaskConfigModel => {
  const taskRunner = Container.get(TaskRunner);

  let tasks = packageDirs.reduce<Array<TaskParamsModel<unknown>>>((result, target) => {
    let resultF = result;

    // Package tasks
    const path = fromPackages(target, configFilename);
    if (existsSync(path)) {
      const tasks = requireInterop<Array<TaskParamsModel<unknown>>>(path);
      resultF = [...resultF, ...tasks.map((task) => ({ ...task, target }))];
    }

    return resultF;
  }, []);

  // Task files
  tasks = filterNil([
    ...tasks,
    ...fromGlobs([joinPaths(['*/src/**/*'], { extension: taskExtension })], {
      isAbsolute: true,
      root: fromPackages(),
    }).map((path) => requireInterop<TaskParamsModel<unknown>>(path)),

    // All tasks
    {
      name: 'default',

      task: [
        async () => {
          const { name } = await prompt<{ name: string }>([
            {
              key: 'name',
              options: [
                ...reduce(
                  taskRunner.aliases,
                  (result, v, k) => [...result, { label: `${k} (${v})`, value: k }],
                  [] as Array<{ label?: string; value: string }>,
                ),
                ...Object.keys(taskRunner.registry),
              ],
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
