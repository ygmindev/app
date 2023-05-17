import webConfig from '@lib/config/framework/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { runWithConfig } from '@tool/task/core/utils/runWithConfig/runWithConfig';

export const make: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'make',

  task: async ({ root }) => runWithConfig({ ...webConfig.build, root }),
};
