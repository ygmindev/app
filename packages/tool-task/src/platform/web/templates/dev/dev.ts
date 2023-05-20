import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import _webConfig from '@lib/config/platform/web/_web';
import { server } from '@lib/platform/web/utils/server/server';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  // task: async ({ root }) => await webConfig.dev.task({ root }),
  task: async ({ root }) => {
    // const _webConfig = (await import('@lib/config/platform/web/_web')).default;
    // const _server = (await import('@lib/platform/web/utils/server/server')).server;
    const port = process.env[`APP_${process.env.ENV_NAME}_PORT`] || '';
    const webConfig = await _webConfig();
    await server({ config: webConfig, port, root });
    return { status: TASK_STATUS.SUCCESS };
  }
};
