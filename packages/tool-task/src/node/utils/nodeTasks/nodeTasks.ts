import type { TaskParamsModel } from '#tool-task/core/core.models';
import clean from '#tool-task/core/templates/clean/clean';
import { lint } from '#tool-task/node/templates/lint/lint';
import { packageExtend } from '#tool-task/node/templates/packageExtend/packageExtend';
import { test } from '#tool-task/node/templates/test/test';
import type { NodeTasksParamsModel } from '#tool-task/node/utils/nodeTasks/nodeTasks.models';

export const nodeTasks = ({ testOverrides }: NodeTasksParamsModel = {}): Array<
  TaskParamsModel<unknown>
> => {
  const testF = { ...test, ...testOverrides };
  return [
    packageExtend,
    lint,
    clean,
    testF,
    { ...testF, name: `${testF.name}-watch`, options: { isWatch: true } },
    { ...testF, name: `${testF.name}-match`, options: { isPrompt: true } },
    { ...testF, name: `${testF.name}-match-watch`, options: { isPrompt: true, isWatch: true } },
  ];
};
