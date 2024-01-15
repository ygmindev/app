import { fromConfig } from '@lib-backend/file/utils/fromConfig/fromConfig';
import { toRelative } from '@lib-backend/file/utils/toRelative/toRelative';
import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib-config/platform/serverless/serverless.models';
import { trimPathname } from '@lib-frontend/route/utils/trimPathname/trimPathname';
import { PLATFORM } from '@lib-platform/core/core.constants';
import { filterNil } from '@lib-shared/core/utils/filterNil/filterNil';
import { HTTP_METHOD } from '@lib-shared/http/http.constants';
import { type AWS } from '@serverless/typescript';
import reduce from 'lodash/reduce';

export const _serverless = ({
  bundleConfig,
  dotenv,
  environment,
  functions,
  host,
  name,
  platform,
  port,
  provider,
  server,
}: ServerlessConfigModel): _ServerlessConfigModel => {
  const bundleConfigF = bundleConfig();
  return {
    custom: {
      dotenv: {
        dotenvParser: dotenv,
        logging: false,
      },

      'serverless-offline': {
        allowCache: false,
        host: host?.split('://')[1],
        httpPort: port,
        ignoreJWTSignature: true,
        lambdaPort: null,
        noPrependStageInUrl: true,
        websocketPort: process.env.SERVER_APP_WEBSOCKET_PORT,
      },

      ...(platform === PLATFORM.NODE
        ? {
            // TODO: vscode debug point not working
            esbuild: {
              ...bundleConfigF.esbuild,
              ...bundleConfigF.optimizeDeps?.esbuildOptions,
              bundle: true,
              exclude: ['aws-sdk'],
              // exclude: ['*'],
              format: 'cjs',
              installExtraArgs: ['--shamefully-hoist'],
              keepOutputDirectory: true,
              packager: 'pnpm',
              plugins: toRelative({ to: fromConfig('platform/serverless/_plugins.js') }),
              watch: { pattern: bundleConfigF.build?.watch?.include },
            },
          }
        : {}),
    },

    functions: reduce(
      functions,
      (result, v, k) => ({
        ...result,
        [k]: {
          events:
            v.method === HTTP_METHOD.WEBSOCKET
              ? [
                  { websocket: { route: '$connect' } },
                  { websocket: { route: '$disconnect' } },
                  { websocket: { route: '$default' } },
                ]
              : [{ httpApi: { method: v.method, path: trimPathname(v.pathname) } }],
          handler: v.handler,
          // layers: ['arn:aws:lambda:region:us-east-1:layer:CustomLambdaLayer:Y'],
          timeout: server.timeout,
        },
      }),
      {},
    ),

    // layers: {
    //   CustomLambdaLayer: {
    //     compatibleRuntimes: ['nodejs18.x' as AwsLambdaRuntime],
    //     package: {
    //       include: ['**'],
    //     },
    //     path: toRelative({ to: fromRoot() }),
    //     retain: true,
    //   },
    // },

    package: {
      excludeDevDependencies: false,
      individually: true,
    },

    plugins: filterNil([
      'serverless-dotenv-plugin',
      platform === PLATFORM.NODE && 'serverless-plugin-common-excludes',
      platform === PLATFORM.NODE && 'serverless-plugin-include-dependencies',
      platform === PLATFORM.NODE && 'serverless-esbuild',
      process.env.NODE_ENV === 'development' && 'serverless-offline',
    ]),

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
      runtime: 'nodejs18.x',
      stage: environment,
      timeout: server.timeout,
      versionFunctions: false,
    },

    service: name,
  };
};
