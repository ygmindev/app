import { SERVERLESS_PROVIDER } from '@lib/backend/serverless/serverless.constants';
import type { ServerlessConfigModel } from '@lib/config/framework/serverless/_serverless.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import toNumber from 'lodash/toNumber';

const serverlessConfig: ServerlessConfigModel = {
  build: {
    command: 'sls package',
  },

  dev: {
    command: 'sls offline start --reloadHandler',

    host: process.env.APP_SERVER_API_HOST,

    lambdaPort: toNumber(process.env.SERVER_LAMBDA_PORT),

    port: toNumber(process.env.APP_SERVER_API_PORT),
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
};

export default serverlessConfig;
