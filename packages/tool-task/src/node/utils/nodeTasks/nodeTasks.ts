import type { TaskParamsModel } from '@tool/task/core/core.models';
import { lint } from '@tool/task/node/templates/lint/lint';
import { packageExtend } from '@tool/task/node/templates/packageExtend/packageExtend';
import { test } from '@tool/task/node/templates/test/test';
import type { NodeTasksParamsModel } from '@tool/task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = ({ testOverrides }: NodeTasksParamsModel = {}): Array<
  TaskParamsModel<unknown>
> => {
  const _test = { ...test, ...testOverrides };
  return [
    packageExtend,
    lint,
    _test,
    { ..._test, name: `${_test.name}-watch`, options: { isWatch: true } },
    { ..._test, name: `${_test.name}-match`, options: { isPrompt: true } },
    { ..._test, name: `${_test.name}-match-watch`, options: { isPrompt: true, isWatch: true } },
  ];
};
