import webConfig from '@lib/config/framework/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => await webConfig.dev.run({ root }),
};
