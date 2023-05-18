import _setupConfig from '@lib/config/core/setup/_setup';
import serverlessConfig from '@lib/config/framework/serverless/serverless.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { DevParamsModel } from '@tool/task/framework/serverless/templates/dev/dev.models';

export const dev: TaskParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  onAfter: [
    async () => {
      const setupConfig = await _setupConfig();
      await setupConfig.onTerminate();
      return { status: TASK_STATUS.SUCCESS };
    },
  ],

  onBefore: [
    async () => {
      const setupConfig = await _setupConfig();
      await setupConfig.onInitialize();
      return { status: TASK_STATUS.SUCCESS };
    },
  ],

  task: async ({ root }) => await serverlessConfig.dev.task({ root }),
};
