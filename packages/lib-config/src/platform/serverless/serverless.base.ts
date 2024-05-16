import {
  SERVERLESS_PROVIDER,
  SERVERLESS_RUNTIME,
} from '@lib/backend/serverless/serverless.constants';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as httpConfig } from '@lib/config/http/http/http';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { _serverless } from '@lib/config/platform/serverless/_serverless';
import { type ServerlessConfigModel } from '@lib/config/platform/serverless/serverless.models';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';

const { _config, config } = defineConfig({
  _config: _serverless,

  config: () =>
    ({
      bundleConfig,

      configFile: 'index.js',

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

      httpConfig,

      name: 'serverless',

      platform: PLATFORM.BASE,

      port: process.env.SERVER_APP_PORT,

      provider: SERVERLESS_PROVIDER.AWS,

      runtime: SERVERLESS_RUNTIME.ZIP,

      server: {
        cors: {
          allowedHeaders: ['*'],

          // allowedOrigins: process.env.NODE_ENV === 'production' ? [APP_URI] : ['*'],
          allowedOrigins: ['*'],
        },

        memory: 3008,

        region: process.env.SERVER_REGION,

        timeout: 900,
      },
    }) satisfies ServerlessConfigModel,
});

export { _config, config };
