import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import type {
  _ServerlessConfigModel,
  _ServerlessConfigParamsModel,
} from '@lib/config/framework/serverless/_serverless.models';
import bundleConfig from '@lib/config/node/bundle/configs/bundle.config';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { AWS } from '@serverless/typescript';
import reduce from 'lodash/reduce';

export const _serverlessConfig =
  ({
    bundle,
    dev,
    dotenv,
    environment,
    functions,
    name,
    platform,
    provider,
    server,
  }: _ServerlessConfigParamsModel): _ServerlessConfigModel =>
  async () => {
    const _bundleConfig = await bundleConfig();
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
                ..._bundleConfig.optimizeDeps?.esbuildOptions,
                bundle: true,
                external: bundle.externals,
                format: 'cjs',
                keepOutputDirectory: true,
                packagePath: fromRoot('package.json'),
                packager: 'yarn',
                packagerOptions: { noInstall: true },
                plugins: toRelative({
                  from: fromWorking(),
                  to: fromConfig('framework/serverless/_plugins.js'),
                }),
                watch: { pattern: bundle.watch },
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
