import { APP_NAME as APP_WEB_NAME } from '@app/web/app/app.constants';
import { APP_NAME as APP_WEB_ADMIN_NAME } from '@app/web-admin/app/app.constants';
import { serverlessNodeConfig } from '@lib/config/serverless/serverless.node';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { setup } from '@lib/shared/environment/utils/setup/setup';
import { EXCLUDE_PATTERNS } from '@lib/shared/file/file.constants';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import type { AWS } from '@serverless/typescript';

const APP_SERVER_API_HOST = getEnv('APP_SERVER_API_HOST');
const APP_SERVER_API_PORT = getEnv('APP_SERVER_API_PORT', null);
const APP_SERVER_LAMBDA_PORT = getEnv('APP_SERVER_LAMBDA_PORT', null);

const SERVER_REGION = getEnv('SERVER_REGION');

export const serverlessConfig = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      custom: {
        dotenv: { dotenvParser: setup, logging: false },

        'serverless-offline': {
          allowCache: false,
          host: APP_SERVER_API_HOST.split('://')[1],
          httpPort: APP_SERVER_API_PORT,
          ignoreJWTSignature: true,
          lambdaPort: APP_SERVER_LAMBDA_PORT,
          noPrependStageInUrl: true,
        },
      },

      package: {
        excludeDevDependencies: true,
        individually: true,
        patterns: EXCLUDE_PATTERNS.map((pattern) => `!${pattern}`),
      },

      plugins: ['serverless-dotenv-plugin', 'serverless-webpack', 'serverless-offline'].filter(
        Boolean,
      ),

      provider: {
        httpApi: {
          cors: {
            allowedHeaders: ['*'],
            allowedOrigins: [
              ...new Set([
                appUri({ name: APP_WEB_ADMIN_NAME }),
                appUri({ name: 'APP_SSR' }),
                appUri({ name: APP_WEB_NAME }),
              ]),
            ],
          },
        },
        memorySize: 128,
        name: 'aws',
        region: SERVER_REGION,
        stage: process.env.NODE_ENV,
        timeout: 10,
        versionFunctions: false,
      },

      service: 'serverless',
    } as AWS,

    serverlessNodeConfig,
  ],
});
