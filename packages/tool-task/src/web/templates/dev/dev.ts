import { config as serverConfig } from '@lib/config/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { server } from '@lib/shared/web/utils/server/server';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    async ({ root }) =>
      server({
        certificate: serverConfig().certificate,
        host: process.env.APP_HOST ?? '',
        port: process.env.APP_PORT ?? '',
        root,
      }),
  ],
};
