import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import serverConfig from '@lib/config/node/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const selfSignCertificate: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'self-sign-certificate',

  task: [
    () => {
      const { certificateDir, privateKeyFilename, publicKeyFilename } =
        serverConfig.params().certificate;
      return `CAROOT=${certificateDir} mkcert -install -cert-file ${joinPaths([certificateDir, publicKeyFilename])} -key-file ${joinPaths([certificateDir, privateKeyFilename])} localhost`;
    },
  ],
};

export default selfSignCertificate;
