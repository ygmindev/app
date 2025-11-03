import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as serverConfig } from '@lib/config/node/server/server.node';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type ServeStaticWebParamsModel } from '@tool/task/web/templates/serveStaticWeb/serveStaticWeb.models';

export const serveStaticWeb: TaskParamsModel<ServeStaticWebParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'serve-static-web',

  task: [
    ({ options }) => {
      const { certificateDir, privateKeyFilename, publicKeyFilename } =
        serverConfig.params().certificate;
      return `${fromExecutable('swa')} start --port ${options?.port ?? process.env.SERVER_APP_SSR_PORT} --ssl --ssl-cert ${joinPaths([certificateDir, publicKeyFilename])} --ssl-key ${joinPaths([certificateDir, privateKeyFilename])} ./__build__/client`;
    },
  ],
};
