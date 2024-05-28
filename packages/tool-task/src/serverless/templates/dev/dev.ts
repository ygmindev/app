import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import serverConfig from '@lib/config/node/server/server';
import serverlessConfig from '@lib/config/serverless/serverless.base';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: [
    () =>
      fromExecutable(
        `sls offline start --config ${serverlessConfig.params().configFilename} ${process.env.SERVER_IS_DISABLE_HOT_RELOAD ? '' : '--reloadHandler'} --verbose`,
      ),
  ],

  variables: () => {
    // TODO: _ServerConfigModel
    const { caFilename, certificateDir } = serverConfig.params().certificate;
    return {
      // NODE_OPTIONS: `--require ${fromPackages('lib-config/src/tracking/telemetry/telemetry.js')}`,
      NODE_EXTRA_CA_CERTS: joinPaths([certificateDir, caFilename]),
    };
  },
};
