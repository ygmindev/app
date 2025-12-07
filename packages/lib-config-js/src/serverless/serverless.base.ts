import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import {
  SERVERLESS_PROVIDER,
  SERVERLESS_RUNTIME,
} from '@lib/backend/serverless/serverless.constants';
import { BUILD_DIR, PRUNE_PATTERNS } from '@lib/config/file/file.constants';
import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { serverConfig } from '@lib/config/node/server/server.node';
import { _serverless } from '@lib/config/serverless/_serverless';
import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib/config/serverless/serverless.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import toNumber from 'lodash/toNumber';

export const serverlessConfig = new Config<ServerlessConfigModel, _ServerlessConfigModel>({
  config: _serverless,

  params: () => {
    const environment = Container.get(Environment);
    return {
      buildDir: BUILD_DIR,

      bundle: bundleConfig.params(),

      configFilename: 'serverless.js',

      dotenv: () => setEnvironment(),

      functions: {
        [PING]: {
          handler: 'src/functions/ping/ping.main',
          method: HTTP_METHOD.GET,
          pathname: `/api/${PING}`,
        },
      },

      host: environment.variables.SERVER_APP_HOST ?? '',

      memory: 3008,

      name: 'serverless',

      platform: PLATFORM.BASE,

      port: toNumber(environment.variables.SERVER_APP_PORT ?? ''),

      provider: SERVERLESS_PROVIDER.AWS,

      prunePatterns: PRUNE_PATTERNS,

      region: environment.variables.SERVER_SERVERLESS_REGION ?? '',

      runtime: SERVERLESS_RUNTIME.ZIP,

      server: serverConfig.params(),

      timeout: 900,
    };
  },
});
