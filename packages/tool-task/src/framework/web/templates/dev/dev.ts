import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { webConfig } from '@lib/config/framework/web/configs/web.config';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { command } from '@tool/task/core/utils/command/command';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    const APP_NAME = getEnv('APP_NAME');
    const port = getEnv(`APP_${APP_NAME}_PORT`);
    await command({
      command: `${fromExecutable('astro')} dev --port ${port} --config ${webConfig.configFile}`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};
