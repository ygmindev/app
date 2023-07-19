import { type TaskParamsModel } from '#tool-task/core/core.models';

export const build: TaskParamsModel = {
  name: 'build',

  task: ['sls package'],
};
