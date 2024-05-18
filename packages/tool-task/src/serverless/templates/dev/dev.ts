import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as httpConfig } from '@lib/config/http/http/http';
import { SERVERLESS_CONFIG } from '@lib/config/serverless/serverless.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    () =>
      fromExecutable(
        `sls offline start --config ${SERVERLESS_CONFIG.configFile} ${process.env.SERVER_IS_DISABLE_HOT_RELOAD ? '' : '--reloadHandler'} --verbose`,
      ),
  ],

  variables: () => {
    const httpConfigF = httpConfig();
    const { caFile, certificateDir } = httpConfigF.certificate;
    return {
      // NODE_OPTIONS: `--require ${fromPackages('lib-config/src/tracking/telemetry/telemetry.js')}`,
      NODE_EXTRA_CA_CERTS: joinPaths([certificateDir, caFile]),
    };
  },
};
