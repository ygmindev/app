import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import type {
  _ServerlessConfigModel,
  ServerlessConfigModel,
} from '@lib/config/platform/serverless/serverless.models';
import { PLATFORM } from '@lib/platform/core/core.constants';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';
import type { AWS } from '@serverless/typescript';
import reduce from 'lodash/reduce';

export const _serverless = ({
  bundleConfig,
  dotenv,
  environment,
  functions,
  host,
  lambdaPort,
  name,
  platform,
  port,
  provider,
  server,
}: ReturnTypeModel<ServerlessConfigModel>): ReturnTypeModel<_ServerlessConfigModel> => {
  const bundleConfigF = bundleConfig();
  return {
    custom: {
      dotenv: {
        dotenvParser: dotenv,
        logging: false,
      },

      'serverless-offline': {
        allowCache: false,
        host: host.split('://')[1],
        httpPort: port,
        ignoreJWTSignature: true,
        lambdaPort,
        noPrependStageInUrl: true,
      },

      ...(platform === PLATFORM.NODE
        ? {
            esbuild: {
              ...bundleConfigF.optimizeDeps?.esbuildOptions,
              bundle: true,
              format: 'cjs',
              keepOutputDirectory: true,
              packagePath: fromRoot('package.json'),
              packager: 'yarn',
              packagerOptions: { noInstall: true },
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
          events: [{ httpApi: { method: v.method, path: v.pathname } }],
          handler: v.handler,
        },
      }),
      {},
    ),

    package: {
      excludeDevDependencies: true,
      individually: true,
    },

    plugins: [
      'serverless-dotenv-plugin',
      platform === PLATFORM.NODE && 'serverless-esbuild',
      'serverless-offline',
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
      runtime: 'nodejs18.x',
      stage: environment,
      timeout: server.timeout,
      versionFunctions: false,
    },

    service: name,
  };
};
