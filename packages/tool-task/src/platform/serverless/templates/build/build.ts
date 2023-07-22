import { type TaskParamsModel } from '#tool-task/core/core.models';

export const build: TaskParamsModel<unknown> = {
  name: 'build',

  task: ['sls package'],
};
