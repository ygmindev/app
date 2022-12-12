import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';
import type { DevParamsModel } from '@tool/task/framework/serverless/templates/dev/dev.models';

export const dev: TaskParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  onAfter: [
    async () => {
      await cleanup();
      return TASK_STATUS.SUCCESS;
    },
  ],

  task: async () => {
    await command({ command: 'npx sls offline start --reloadHandler' });
    return { status: TASK_STATUS.SUCCESS };
  },
};
