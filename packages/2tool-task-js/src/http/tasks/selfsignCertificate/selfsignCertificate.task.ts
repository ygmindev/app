import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as serverConfig } from '@lib/config/node/server/server.node';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const selfsignCertificate: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'selfsign-certificate',

  task: [
    () => {
      const { certificateDir, privateKeyFilename, publicKeyFilename } =
        serverConfig.params().certificate;
      return `CAROOT=${certificateDir} mkcert -install -cert-file ${joinPaths([certificateDir, publicKeyFilename])} -key-file ${joinPaths([certificateDir, privateKeyFilename])} localhost`;
    },
  ],
};

export default selfsignCertificate;
