import { setupConfig } from '@lib/config/core/setup/configs/setup.config';
import type { _ServerlessConfigParamsModel } from '@lib/config/framework/serverless/_serverless.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { runWithConfig } from '@tool/task/core/utils/runWithConfig/runWithConfig';
import type { DevParamsModel } from '@tool/task/framework/serverless/templates/dev/dev.models';

export const dev: TaskParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  onAfter: [
    async () => {
      await setupConfig.onTerminate();
      return TASK_STATUS.SUCCESS;
    },
  ],

  onBefore: [
    async () => {
      await setupConfig.onInitialize();
      return TASK_STATUS.SUCCESS;
    },
  ],

  task: async ({ root }) => {
    const serverlessConfigParams = await importFromEnv<
      _ServerlessConfigParamsModel
    >('@lib/config/framework/serverless/params/serverless.params');

    return await runWithConfig({ ...serverlessConfigParams.dev, root });
  },
};
