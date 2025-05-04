import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { importInterop } from '@lib/shared/core/utils/importInterop/importInterop';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type _CliModel, type _CliParamsModel } from '@tool/task/core/utils/cli/_cli.models';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';
import { existsSync } from 'fs';
import gulp from 'gulp';
import noop from 'lodash/noop';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

const BUILD_TASKS = ['build', 'publish'];

export const _cli = async ({
  configFilename,
  packageDirs,
  task,
  taskExtension,
}: _CliParamsModel): Promise<_CliModel> => {
  const taskRunner = Container.get(TaskRunner);

  if (task && some(BUILD_TASKS, (v) => task.includes(v) || task.endsWith(v[0]))) {
    process.env.NODE_ENV = ENVIRONMENT.PRODUCTION;
  }

  let tasks = await reduceSequence<Array<string>, Array<TaskParamsModel<unknown>>>(
    packageDirs,
    async (result, target) => {
      let resultF = result;

      // Package tasks
      const path = fromPackages(target, configFilename);
      if (existsSync(path)) {
        const tasks = await importInterop<Array<TaskParamsModel<unknown>>>(path);
        resultF = [
          ...resultF,
          ...tasks.map((task) => ({ ...task, root: fromPackages(target), target })),
        ];
      }

      return resultF;
    },
    [],
  );

  // Task files
  tasks = filterNil([
    ...tasks,

    ...(await mapSequence(
      fromGlobs([joinPaths(['*/src/**/*'], { extension: taskExtension })], {
        isAbsolute: true,
        root: fromPackages(),
      }).map((path) => async () => importInterop<TaskParamsModel<unknown>>(path)),
    )),

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

  const taskF = gulp.task(task ?? 'default');
  if (taskF) {
    await taskF(noop);
  } else {
    throw new NotFoundError(task);
  }
};
