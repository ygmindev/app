import webConfig from '@lib/config/framework/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';

export const make: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'make',

  task: async ({ root }) => await webConfig.build.run({ root }),
};
