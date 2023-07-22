import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import clean from '#tool-task/core/templates/clean/clean';
import { lint } from '#tool-task/node/templates/lint/lint';
import { test } from '#tool-task/node/templates/test/test';
import { type TestParamsModel } from '#tool-task/node/templates/test/test.models';
import {
  type NodeTasksMdoel,
  type NodeTasksParamsModel,
} from '#tool-task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = <TType extends Array<TaskParamsModel<unknown>>>({
  additionalTasks,
  testOverrides,
}: NodeTasksParamsModel<TType> = {}): NodeTasksMdoel => {
  const testF = merge<TaskParamsModel<TestParamsModel>>(
    filterNil([testOverrides, test]),
    MERGE_STRATEGY.DEEP_APPEND,
  );
  return [
    lint,
    clean,
    testF,
    { ...testF, name: `${testF.name}-watch`, overrides: { isWatch: true } },
    { ...testF, name: `${testF.name}-match`, overrides: { isPrompt: true } },
    { ...testF, name: `${testF.name}-match-watch`, overrides: { isPrompt: true, isWatch: true } },
    ...(additionalTasks ?? []),
  ] as Array<TaskParamsModel<unknown>>;
};
