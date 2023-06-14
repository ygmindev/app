import type { EnvironmentModel } from '#lib-shared/environment/environment.models';
import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';
import { appUri } from '#lib-shared/http/utils/appUri/appUri';
import toNumber from 'lodash/toNumber';

import { SERVERLESS_PROVIDER } from '#lib-backend/serverless/serverless.constants';
import { _config as _bundleConfig } from '#lib-config/node/bundle/bundle.node';
import { _serverless } from '#lib-config/platform/serverless/_serverless';
import type {
  _ServerlessConfigModel,
  ServerlessConfigModel,
} from '#lib-config/platform/serverless/serverless.models';
import { PLATFORM } from '#lib-platform/core/core.constants';

export const config: ServerlessConfigModel = () => ({
  bundleConfig: _bundleConfig,

  dotenv: () => setEnvironment(),

  environment: process.env.NODE_ENV as EnvironmentModel,

  host: process.env.APP_SERVER_API_HOST,

  lambdaPort: toNumber(process.env.SERVER_LAMBDA_PORT),

  name: 'serverless',

  platform: PLATFORM.BASE,

  port: toNumber(process.env.APP_SERVER_API_PORT),

  provider: SERVERLESS_PROVIDER.AWS,

  server: {
    cors: {
      allowedHeaders: ['*'],

      allowedOrigins: ['WEB', 'WEB_LIBRARY'].map((name) => appUri({ name })),
    },

    memory: 128,

    region: process.env.SERVER_REGION,

    timeout: 10,
  },
});

export const _config: _ServerlessConfigModel = () => _serverless(config());
