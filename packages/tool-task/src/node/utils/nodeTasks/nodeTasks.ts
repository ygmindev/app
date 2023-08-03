import range from 'lodash/range';

import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { joinPaths } from '#lib-backend/file/utils/joinPaths/joinPaths';
import { config } from '#lib-config/core/file/file';
import { config as testConfig } from '#lib-config/node/test/test.base';
import { config as webConfig } from '#lib-config/platform/web/web';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { type PartialModel } from '#lib-shared/core/core.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import clean from '#tool-task/core/templates/clean/clean';
import { PARALLEL_CONDITION } from '#tool-task/core/utils/parallel/parallel.constants';
import { copy } from '#tool-task/file/utils/copy/copy';
import { lint } from '#tool-task/node/templates/lint/lint';
import { test } from '#tool-task/node/templates/test/test';
import { type TestParamsModel } from '#tool-task/node/templates/test/test.models';
import {
  type NodeTasksMdoel,
  type NodeTasksParamsModel,
} from '#tool-task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = <TType extends Array<TaskParamsModel<unknown>>>({
  additionalTasks,
  eteTasks,
  testParams,
}: NodeTasksParamsModel<TType> = {}): NodeTasksMdoel => {
  const { eteExtensions, outputPath, specExtensions } = testConfig();
  const { publicPath } = webConfig();

  const getTestTasks = (
    params?: PartialModel<TaskParamsModel<TestParamsModel>>,
  ): Array<TaskParamsModel<TestParamsModel>> => {
    const testSpec: TaskParamsModel<TestParamsModel> = merge([
      { overrides: { testExtensions: specExtensions } },
      params,
      testParams,
      test,
    ]);
    const testBase: TaskParamsModel<TestParamsModel> = merge([
      {
        name: `${testSpec.name}-base`,
        overrides: { testExtensions: eteExtensions },
        variables: () => ({ ENV_PLATFORM: PLATFORM.BASE }),
      },
      testSpec,
    ]);
    const testEte: TaskParamsModel<TestParamsModel> = merge([
      {
        name: `${testSpec.name}-ete`,
        onFinish: [
          async ({ root }) =>
            copy({
              from: joinPaths([root, outputPath]),
              isOverwrite: true,
              to: fromStatic(publicPath, config.distPath, 'test'),
            }),
        ],
        task: [
          [
            [({ target }) => `run ${target}-${testBase.name}`, ...(eteTasks ?? [])],
            {
              condition: PARALLEL_CONDITION.FIRST,
              silent: eteTasks ? range(1, eteTasks.length + 1) : undefined,
            },
            { environment: ENVIRONMENT.TEST },
          ],
        ],
        variables: () => ({ ENV_PLATFORM: PLATFORM.BASE }),
      },
      testParams,
      params,
    ]);
    return [testSpec, testBase, testEte];
  };

  return [
    lint,
    clean,
    ...getTestTasks(),
    ...getTestTasks({ name: `${test.name}-watch`, overrides: { isWatch: true } }),
    ...getTestTasks({ name: `${test.name}-match`, overrides: { isPrompt: true } }),
    ...getTestTasks({
      name: `${test.name}-match-watch`,
      overrides: { isPrompt: true, isWatch: true },
    }),
    ...(additionalTasks ?? []),
  ] as Array<TaskParamsModel<unknown>>;
};
