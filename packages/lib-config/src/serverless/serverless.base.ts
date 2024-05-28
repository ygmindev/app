import {
  SERVERLESS_PROVIDER,
  SERVERLESS_RUNTIME,
} from '@lib/backend/serverless/serverless.constants';
import { BUILD_DIR, PRUNE_PATTERNS } from '@lib/config/file/file.constants';
import bundleConfig from '@lib/config/node/bundle/bundle.node';
import serverConfig from '@lib/config/node/server/server';
import { _serverless } from '@lib/config/serverless/_serverless';
import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib/config/serverless/serverless.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import toNumber from 'lodash/toNumber';

const config = defineConfig<ServerlessConfigModel, _ServerlessConfigModel>({
  config: _serverless,

  params: () => ({
    buildDir: BUILD_DIR,

    bundle: bundleConfig.params(),

    configFilename: 'serverless.js',

    dotenv: () => setEnvironment(),

    environment: process.env.NODE_ENV,

    functions: {
      [PING]: {
        handler: 'src/functions/ping/ping.main',
        method: HTTP_METHOD.GET,
        pathname: `/api/${PING}`,
      },
    },

    host: process.env.SERVER_APP_HOST,

    memory: 3008,

    name: 'serverless',

    platform: PLATFORM.BASE,

    port: toNumber(process.env.SERVER_APP_PORT),

    provider: SERVERLESS_PROVIDER.AWS,

    prunePatterns: PRUNE_PATTERNS,

    region: process.env.SERVER_REGION,

    runtime: SERVERLESS_RUNTIME.ZIP,

    server: serverConfig.params(),

    timeout: 900,
  }),
});

export default config;
