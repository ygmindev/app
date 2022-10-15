import { clean } from '@tool/task/core/tasks/clean/clean';
import { register } from '@tool/task/core/utils/register/register';
import { lint } from '@tool/task/node/tasks/lint/lint';
import { packageExtend } from '@tool/task/node/tasks/packageExtend/packageExtend';
import { test } from '@tool/task/node/tasks/test/test';
import type { RegisterNodeTasksParamsModel } from '@tool/task/node/utils/registerNodeTasks/registerNodeTasks.models';

export const registerNodeTasks = ({ name }: RegisterNodeTasksParamsModel): void => {
  const testTask = { ...test, target: name };

  register({ ...packageExtend, target: name });
  register({ ...clean, target: name });
  register({ ...lint, target: name });
  register(testTask);
  register({ ...testTask, name: `${test.name}-watch`, options: { isWatch: true } });
  register({ ...testTask, name: `${test.name}-match`, options: { isPrompt: true } });
  register({
    ...testTask,
    name: `${test.name}-watch-match`,
    options: { isPrompt: true, isWatch: true },
  });
};
