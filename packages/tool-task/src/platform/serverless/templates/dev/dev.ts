import { config } from '@lib/config/core/setup/setup.node';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';
import type { DevParamsModel } from '@tool/task/platform/serverless/templates/dev/dev.models';

export const dev: TaskParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  onAfter: [
    async () => {
      await config.onTerminate();
      return { status: TASK_STATUS.SUCCESS };
    },
  ],

  onBefore: [
    async () => {
      await config.onInitialize();
      return { status: TASK_STATUS.SUCCESS };
    },
  ],

  task: async ({ root }) => await command('sls offline start --reloadHandler --verbose', { root }),
};
