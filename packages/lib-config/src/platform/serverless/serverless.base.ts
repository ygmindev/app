import { SERVERLESS_PROVIDER } from '@lib/backend/serverless/serverless.constants';
import type { ServerlessConfigModel, _ServerlessConfigModel } from '@lib/config/platform/serverless/serverless.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { command } from '@tool/task/core/utils/command/command';
import toNumber from 'lodash/toNumber';
import { _serverless } from '@lib/config/platform/serverless/_serverless';
import { _config as _bundleConfig } from '@lib/config/node/bundle/bundle.base';

export const config: ServerlessConfigModel = () => ({
  build: {
    task: async ({ root }) => await command('sls package', { root }),
  },

  bundleConfig: _bundleConfig(),

  dev: {
    host: process.env.APP_SERVER_API_HOST,

    lambdaPort: toNumber(process.env.SERVER_LAMBDA_PORT),

    port: toNumber(process.env.APP_SERVER_API_PORT),

    task: async ({ root }) => await command('sls offline start --reloadHandler', { root }),
  },

  dotenv: () => setEnvironment(),

  environment: process.env.NODE_ENV as EnvironmentModel,

  name: 'serverless',

  platform: PLATFORM.BASE,

  provider: SERVERLESS_PROVIDER.AWS,

  server: {
    cors: {
      allowedHeaders: ['*'],

      allowedOrigins: ['WEB'].map((name) => appUri({ name })),
    },

    memory: 128,

    region: process.env.SERVER_REGION,

    timeout: 10,
  },
});

export const _config: _ServerlessConfigModel = _serverless(config());
