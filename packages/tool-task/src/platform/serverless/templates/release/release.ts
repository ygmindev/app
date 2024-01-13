import { fromExecutable } from '@lib-backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib-shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool-task/core/core.models';

export const release: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'release',

  task: [fromExecutable('sls deploy --aws-profile default --verbose')],
};
