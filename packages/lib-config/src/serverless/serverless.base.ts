import {
  SERVERLESS_PROVIDER,
  SERVERLESS_RUNTIME,
} from '@lib/backend/serverless/serverless.constants';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as httpConfig } from '@lib/config/http/http/http';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { _serverless } from '@lib/config/serverless/_serverless';
import { SERVERLESS_CONFIG } from '@lib/config/serverless/serverless.constants';
import { type ServerlessConfigModel } from '@lib/config/serverless/serverless.models';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { HTTP_METHOD, PING } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

const { _config, config } = defineConfig({
  _config: _serverless,

  config: () =>
    ({
      ...SERVERLESS_CONFIG,

      bundleConfig,

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
