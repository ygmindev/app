import type { _ServerlessConfigParamsModel } from '@lib/config/server/serverless/_serverless.models';
import type { AWS } from '@serverless/typescript';
import { reduce } from 'lodash';

export const _serverlessConfig = ({
  bundle,
  dotenv,
  environment,
  functions,
  name,
  offline,
  provider,
  server,
}: _ServerlessConfigParamsModel): AWS => ({
  custom: {
    dotenv: { dotenvParser: dotenv, logging: false },

    ...(offline
      ? {
          'serverless-offline': {
            allowCache: false,
            host: offline.host.split('://')[1],
            httpPort: offline.port,
            ignoreJWTSignature: true,
            lambdaPort: offline.lambdaPort,
            noPrependStageInUrl: true,
          },
        }
      : {}),
  },

  functions: reduce(
    functions,
    (result, v, k) => ({
      ...result,
      [k]: {
        events: [{ httpApi: { method: v.method, path: v.pathname } }],
        handler: v.handler,
        package: { patterns: bundle.include },
        runtime: 'nodejs14.x',
      },
    }),
    {},
  ),

  package: {
    excludeDevDependencies: true,
    individually: true,
    patterns: bundle.exclude?.map((pattern) => `!${pattern}`),
  },

  plugins: [
    dotenv && 'serverless-dotenv-plugin',
    // 'serverless-webpack',
    offline && 'serverless-offline',
  ].filter(Boolean) as Array<string>,

  provider: {
    httpApi: {
      cors: {
        allowedHeaders: server.cors.allowedHeaders,
        allowedOrigins: server.cors.allowedOrigins,
      },
    },
    memorySize: server.memory,
    name: provider,
    region: server.region as AWS['provider']['region'],
    stage: environment,
    timeout: server.timeout,
    versionFunctions: false,
  },

  service: name,
});
