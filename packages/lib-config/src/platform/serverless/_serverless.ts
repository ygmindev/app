import { type AWS } from '@serverless/typescript';
import reduce from 'lodash/reduce';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { toRelative } from '#lib-backend/file/utils/toRelative/toRelative';
import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '#lib-config/platform/serverless/serverless.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { HTTP_METHOD } from '#lib-shared/http/http.constants';

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
        websocketPort: process.env.SERVER_WEBSOCKET_PORT,
      },

      ...(platform === PLATFORM.NODE
        ? {
            // TODO: vscode debug point not working
            esbuild: {
              ...bundleConfigF.esbuild,
              ...bundleConfigF.optimizeDeps?.esbuildOptions,
              bundle: true,
              format: 'cjs',
              keepOutputDirectory: true,
              packagePath: fromRoot('package.json'),
              packager: 'yarn',
              packagerOptions: { ignoreLockfile: true, noInstall: true },
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
          timeout: server.timeout,
        },
      }),
      {},
    ),

    package: {
      excludeDevDependencies: true,
      individually: true,
    },

    plugins: filterNil([
      'serverless-dotenv-plugin',
      platform === PLATFORM.NODE && 'serverless-esbuild',
      'serverless-offline',
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
