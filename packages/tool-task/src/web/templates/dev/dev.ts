import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import internationalizeConfig from '@lib/config/locale/internationalize/internationalize.server';
import serverConfig from '@lib/config/node/server/server';
import webConfig from '@lib/config/node/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { server } from '@lib/shared/web/utils/server/server';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    async ({ root }) =>
      // TODO: _ServerConfigModel
      server({
        certificate: serverConfig.params().certificate,
        host: process.env.APP_HOST ?? '',
        internationalize: internationalizeConfig.params(),
        port: process.env.APP_PORT ?? '',
        publicDir: PUBLIC_DIR,
        root,
        web: webConfig.params(),
      }),
  ],
};
