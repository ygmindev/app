import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as serverConfig } from '@lib/config/node/server/server';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildSsr from '@tool/task/web/templates/buildSsr/buildSsr.task';
import { type ServeSsrParamsModel } from '@tool/task/web/templates/serveSsr/serveSsr.models';

export const serveSsr: TaskParamsModel<ServeSsrParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'serve-ssr',

  onBefore: [({ target }) => `${target}-${buildSsr.name}`],

  task: [
    // TODO fix root
    ({ options }) => {
      const { certificateDir, privateKeyFilename, publicKeyFilename } =
        serverConfig.params().certificate;
      return `
        ${fromExecutable('func')} host start \
        --no-build \
        --useHttps \
        --cert ${joinPaths([certificateDir, publicKeyFilename])} \
        --key ${joinPaths([certificateDir, privateKeyFilename])} \
        --port ${options?.port ?? process.env.SERVER_APP_SSR_PORT}
      `;
    },
  ],
};
