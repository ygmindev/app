import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as httpConfig } from '@lib/config/http/http/http';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const selfSignCertificate: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'self-sign-certificate',

  task: [
    () => {
      const httpConfigF = httpConfig();
      const { certificateDir, privateKeyFile, publicKeyFile } = httpConfigF.certificate;
      return `CAROOT=${certificateDir} mkcert -install -cert-file ${joinPaths([certificateDir, publicKeyFile])} -key-file ${joinPaths([certificateDir, privateKeyFile])} localhost`;
    },
  ],
};

export default selfSignCertificate;
