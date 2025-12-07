import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { serverConfig } from '@lib/config/node/server/server.node';
import {
  type SelfSignCertificatesModel,
  type SelfSignCertificatesParamsModel,
} from '@tool/task/core/tasks/selfSignCertificates/selfSignCertificates.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';

export const selfSignCertificates = buildTask({
  task: async (parmas: SelfSignCertificatesParamsModel): Promise<SelfSignCertificatesModel> => {
    const { certificateDir, privateKeyFilename, publicKeyFilename } =
      serverConfig.params().certificate;
    return execute({
      command: `CAROOT=${certificateDir} mkcert -install -cert-file ${joinPaths([certificateDir, publicKeyFilename])} -key-file ${joinPaths([certificateDir, privateKeyFilename])} localhost`,
    });
  },
});
