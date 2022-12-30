import { SERVERLESS_PROVIDER } from '@lib/config/server/serverless/serverless.constants';
import type { ServerlessConfigParamsModel } from '@lib/config/server/serverless/serverless.models';
import type { EnvironmentModel } from '@lib/shared/environment/environment.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { setup } from '@lib/shared/environment/utils/setup/setup';
import { EXCLUDE_PATTERNS } from '@lib/shared/file/file.constants';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';

const APP_SERVER_API_HOST = getEnv('APP_SERVER_API_HOST');
const APP_SERVER_API_PORT = getEnv<number>('APP_SERVER_API_PORT', null);
const APP_SERVER_LAMBDA_PORT = getEnv<number>('APP_SERVER_LAMBDA_PORT', null);
const SERVER_REGION = getEnv('SERVER_REGION');

export const serverlessConfig: ServerlessConfigParamsModel = {
  bundle: {
    exclude: EXCLUDE_PATTERNS,
  },

  dotenv: setup,

  environment: process.env.NODE_ENV as EnvironmentModel,

  name: 'serverless',

  offline: {
    host: APP_SERVER_API_HOST,
    lambdaPort: APP_SERVER_LAMBDA_PORT,
    port: APP_SERVER_API_PORT,
  },

  provider: SERVERLESS_PROVIDER.AWS,

  server: {
    cors: {
      allowedHeaders: ['*'],

      allowedOrigins: ['APP_WEB'].map((name) => appUri({ name })),
    },

    memory: 128,

    region: SERVER_REGION,

    timeout: 10,
  },
};
