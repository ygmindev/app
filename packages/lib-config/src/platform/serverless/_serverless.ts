import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import type { _BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import type {
  _ServerlessConfigModel,
  ServerlessConfigModel,
} from '@lib/config/platform/serverless/_serverless.models';
import { PLATFORM } from '@lib/platform/core/core.constants';
import type { AWS } from '@serverless/typescript';
import reduce from 'lodash/reduce';

const _serverlessConfig: _ServerlessConfigModel = async () => {
  const { dev, dotenv, environment, functions, name, platform, provider, server } =
    await importConfig<ServerlessConfigModel>('platform/serverless/serverless');
  const { optimizeDeps } = await importConfig<_BundleConfigModel>('node/bundle/_bundle');
  return {
    custom: {
      dotenv: {
        dotenvParser: dotenv,
        logging: false,
      },

      'serverless-offline': {
        allowCache: false,
        host: dev.host.split('://')[1],
        httpPort: dev.port,
        ignoreJWTSignature: true,
        lambdaPort: dev.lambdaPort,
        noPrependStageInUrl: true,
      },

      ...(platform === PLATFORM.NODE
        ? {
            esbuild: {
              ...optimizeDeps?.esbuildOptions,
              bundle: true,
              format: 'cjs',
              keepOutputDirectory: true,
              packagePath: fromRoot('package.json'),
              packager: 'yarn',
              packagerOptions: { noInstall: true },
              plugins: toRelative({ to: fromConfig('platform/serverless/_plugins.js') }),
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

export default _serverlessConfig;
