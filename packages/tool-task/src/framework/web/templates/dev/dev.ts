import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { webConfig } from '@lib/config/framework/web/configs/web.config';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { server } from '@tool/task/framework/web/utils/server/server';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    const port = process.env[`APP_${process.env.ENV_NAME}_PORT`] || '';
    await server({ configFile: webConfig.configFile, port, root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
