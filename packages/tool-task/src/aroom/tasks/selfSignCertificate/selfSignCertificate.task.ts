import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as serverConfig } from '@lib/config/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const selfSignCertificate: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'self-sign-certificate',

  task: [
    () => {
      const { certificateDir, privateKeyFile, publicKeyFile } = serverConfig().certificate;
      return `CAROOT=${certificateDir} mkcert -install -cert-file ${joinPaths([certificateDir, publicKeyFile])} -key-file ${joinPaths([certificateDir, privateKeyFile])} localhost`;
    },
  ],
};

export default selfSignCertificate;
