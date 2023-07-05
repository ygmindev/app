import toNumber from 'lodash/toNumber';

import { SERVERLESS_PROVIDER } from '#lib-backend/serverless/serverless.constants';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _config as _bundleConfig } from '#lib-config/node/bundle/bundle.node';
import { _serverless } from '#lib-config/platform/serverless/_serverless';
import { type ServerlessConfigModel } from '#lib-config/platform/serverless/serverless.models';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';

const { _config, config } = defineConfig({
  _config: _serverless,

  config: () =>
    ({
      bundleConfig: _bundleConfig,

      dotenv: () => setEnvironment(),

      environment: process.env.NODE_ENV,

      host: process.env.APP_SERVER_API_HOST,

      lambdaPort: toNumber(process.env.SERVER_LAMBDA_PORT),

      name: 'serverless',

      platform: PLATFORM.BASE,

      port: toNumber(process.env.APP_SERVER_API_PORT),

      provider: SERVERLESS_PROVIDER.AWS,

      server: {
        cors: {
          allowedHeaders: ['*'],

          // TODO: fix in prod
          allowedOrigins: ['*'],
        },

        memory: 128,

        region: process.env.SERVER_REGION,

        timeout: 10,
      },
    } satisfies ServerlessConfigModel),
});

export { _config, config };
