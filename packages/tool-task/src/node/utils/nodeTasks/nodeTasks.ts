import range from 'lodash/range';

import { config } from '#lib-config/node/test/test.base';
import { type PartialModel } from '#lib-shared/core/core.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import clean from '#tool-task/core/templates/clean/clean';
import { PARALLEL_CONDITION } from '#tool-task/core/utils/parallel/parallel.constants';
import { lint } from '#tool-task/node/templates/lint/lint';
import { test } from '#tool-task/node/templates/test/test';
import { type TestParamsModel } from '#tool-task/node/templates/test/test.models';
import {
  type NodeTasksMdoel,
  type NodeTasksParamsModel,
} from '#tool-task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = <TType extends Array<TaskParamsModel<unknown>>>({
  additionalTasks,
  onBeforeEte,
}: NodeTasksParamsModel<TType> = {}): NodeTasksMdoel => {
  const { eteExtensions, specExtensions } = config();

  const getTestTasks = (
    params?: PartialModel<TaskParamsModel<TestParamsModel>>,
  ): Array<TaskParamsModel<TestParamsModel>> => {
    const testSpec: TaskParamsModel<TestParamsModel> = merge([
      { overrides: { testExtensions: specExtensions } },
      params,
      test,
    ]);
    const testEte: TaskParamsModel<TestParamsModel> = merge([
      {
        overrides: { testExtensions: eteExtensions },
        task: [
          [
            [`run ${testSpec.name}-ete`, ...(onBeforeEte ?? [])],
            {
              condition: PARALLEL_CONDITION.FIRST,
              silent: onBeforeEte ? range(1, onBeforeEte.length + 1) : undefined,
            },
          ],
        ],
      },
      testSpec,
    ]);
    return [testSpec, testEte];
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
