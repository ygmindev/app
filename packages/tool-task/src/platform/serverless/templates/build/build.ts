import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';

export const build: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build',

  task: ['sls package'],
};
