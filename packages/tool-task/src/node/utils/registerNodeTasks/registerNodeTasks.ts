import { clean } from '@tool/task/core/templates/clean/clean';
import { register } from '@tool/task/core/utils/register/register';
import { lint } from '@tool/task/node/templates/lint/lint';
import { packageExtend } from '@tool/task/node/templates/packageExtend/packageExtend';
import { test } from '@tool/task/node/templates/test/test';
import type { RegisterNodeTasksParamsModel } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks.models';

export const registerNodeTasks = ({ name, testOverrides }: RegisterNodeTasksParamsModel): void => {
  const testTask = { ...test, target: name };

  register({ ...packageExtend, target: name });
  register({ ...clean, target: name });
  register({ ...lint, target: name });
  register({ ...testTask, ...testOverrides });
  register({
    ...testTask,
    name: `${test.name}-watch`,
    options: { isWatch: true },
    ...testOverrides,
  });
  register({
    ...testTask,
    name: `${test.name}-match`,
    options: { isPrompt: true },
    ...testOverrides,
  });
  register({
    ...testTask,
    name: `${test.name}-watch-match`,
    options: { isPrompt: true, isWatch: true },
    ...testOverrides,
  });
};
