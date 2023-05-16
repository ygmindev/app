import webConfigParams from '@lib/config/framework/web/params/web.params';
import { server } from '@lib/framework/web/utils/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    const port = process.env[`APP_${process.env.ENV_NAME}_PORT`] || '';
    await server({ config: webConfigParams.dev.config, port, root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
