import testConfig from '@lib/config/node/test/test.base';
import { BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import { type PartialModel } from '@lib/shared/core/core.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import clean from '@tool/task/core/templates/clean/clean';
import { PARALLEL_CONDITION } from '@tool/task/core/utils/runParallel/runParallel.constants';
import { lint } from '@tool/task/node/templates/lint/lint';
import { test } from '@tool/task/node/templates/test/test';
import { type TestParamsModel } from '@tool/task/node/templates/test/test.models';
import {
  type NodeTasksMdoel,
  type NodeTasksParamsModel,
} from '@tool/task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = ({
  additionalTasks,
  eteTasks,
  testParams,
}: NodeTasksParamsModel = {}): NodeTasksMdoel => {
  const { outputDir } = testConfig.params();

  const getTestTasks = (
    params?: PartialModel<TaskParamsModel<TestParamsModel>>,
  ): Array<TaskParamsModel<TestParamsModel>> => {
    const testUnit: TaskParamsModel<TestParamsModel> = merge([params, testParams, test]);
    const testBase: TaskParamsModel<TestParamsModel> = merge([
      {
        name: `${testUnit.name}-base`,
        variables: () => ({ ENV_PLATFORM: PLATFORM.BASE, TEST_IS_ETE: BOOLEAN_STRING.TRUE }),
      },
      testUnit,
    ]);

    const testEte: TaskParamsModel<TestParamsModel> = merge([
      {
        name: `${testUnit.name}-ete`,

        // onFinish: [
        //   async ({ root }) =>
        //     copy({
        //       from: joinPaths([root, outputDir]),
        //       isOverwrite: true,
        //       to: fromStatic(PUBLIC_DIR, DIST_DIR, 'test'),
        //     }),
        // ],

        task: [
          [
            [({ target }) => `${target}-${testBase.name}`, ...(eteTasks ?? [])],
            {
              condition: PARALLEL_CONDITION.FIRST,
              // silent: eteTasks ? range(1, eteTasks.length + 1) : undefined,
            },
            { environment: ENVIRONMENT.TEST },
          ],
        ],

        variables: () => ({ ENV_PLATFORM: PLATFORM.BASE, TEST_IS_ETE: BOOLEAN_STRING.TRUE }),
      },
      testParams,
      params,
    ]);
    return [testUnit, testBase, testEte];
  };

  return [
    lint,
    clean,
    ...getTestTasks(),
    ...getTestTasks({ name: `${test.name}-watch`, overrides: () => ({ isWatch: true }) }),
    ...getTestTasks({ name: `${test.name}-match`, overrides: () => ({ isPrompt: true }) }),
    ...getTestTasks({
      name: `${test.name}-match-watch`,
      overrides: () => ({ isPrompt: true, isWatch: true }),
    }),
    ...(additionalTasks ?? []),
  ] as NodeTasksMdoel;
};
