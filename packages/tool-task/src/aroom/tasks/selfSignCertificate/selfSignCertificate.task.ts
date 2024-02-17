import { config as httpConfig } from '@lib/config/http/http/http';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const selfSignCertificate: TaskParamsModel<unknown> = {
  name: 'self-sign-certificate',

  task: [
    () => {
      const httpConfigF = httpConfig();
      const { privateKeyFile, publicKeyFile } = httpConfigF.certificate;
      return `mkcert -install -cert-file ${publicKeyFile} -key-file ${privateKeyFile}`;
    },
  ],

  variables: () => ({
    CAROOT: httpConfig().certificate.certificateDir,
  }),
};

export default selfSignCertificate;
