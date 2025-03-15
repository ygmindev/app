import { fromAssets } from '@lib/backend/file/utils/fromAssets/fromAssets';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import internationalizeConfig from '@lib/config/locale/internationalize/internationalize.node';
import serverConfig from '@lib/config/node/server/server';
import webConfig from '@lib/config/node/web/web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { runServer } from '@lib/shared/web/utils/runServer/runServer';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    async ({ root }) =>
      // TODO: _ServerConfigModel
      runServer({
        assetsPathname: fromAssets(),
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
