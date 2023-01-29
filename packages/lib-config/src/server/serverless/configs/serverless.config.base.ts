import { bundleConfig } from '@lib/config/javascript/bundle/configs/bundle.config.base';
import { SERVERLESS_PROVIDER } from '@lib/config/server/serverless/serverless.constants';
import type { ServerlessConfigParamsModel } from '@lib/config/server/serverless/serverless.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { setup } from '@lib/shared/environment/utils/setup/setup';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import toNumber from 'lodash/toNumber';

export const serverlessConfig: ServerlessConfigParamsModel = {
  bundle: bundleConfig,

  dotenv: setup,

  environment: process.env.NODE_ENV as EnvironmentModel,

  name: 'serverless',

  offline: {
    host: process.env.APP_SERVER_API_HOST,
    lambdaPort: toNumber(process.env.SERVER_LAMBDA_PORT),
    port: toNumber(process.env.APP_SERVER_API_PORT),
  },

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
};
