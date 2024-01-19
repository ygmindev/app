import { _config } from '@lib/config/platform/web/web';
import { server } from '@lib/platform/web/utils/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    async ({ root }) =>
      server({
        config: _config(),
        host: process.env.APP_HOST ?? '',
        port: process.env.APP_PORT ?? '',
        root,
      }),
  ],
};
