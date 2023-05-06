import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { bundleConfig } from '@lib/config/javascript/bundle/configs/bundle.config';
import type { _ServerlessConfigParamsModel } from '@lib/config/server/serverless/_serverless.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { AWS } from '@serverless/typescript';
import reduce from 'lodash/reduce';

export const _serverlessConfig = ({
  bundle,
  dotenv,
  environment,
  functions,
  name,
  offline,
  platform,
  provider,
  server,
}: _ServerlessConfigParamsModel): AWS => ({
  custom: {
    dotenv: {
      dotenvParser: dotenv,
      logging: false,
    },

    'serverless-offline': {
      allowCache: false,
      host: offline.host.split('://')[1],
      httpPort: offline.port,
      ignoreJWTSignature: true,
      lambdaPort: offline.lambdaPort,
      noPrependStageInUrl: true,
    },

    ...(platform === PLATFORM.NODE
      ? {
          esbuild: {
            ...bundleConfig.optimizeDeps?.esbuildOptions,
            bundle: true,
            define: bundleConfig.define,
            external: bundle.externals,
            format: 'cjs',
            keepOutputDirectory: true,
            minify: environment === ENVIRONMENT.PRODUCTION,
            nodePaths: bundle.modulePaths,
            packagePath: fromRoot('package.json'),
            packager: 'yarn',
            packagerOptions: {
              noInstall: true,
            },
            plugins: toRelative({
              from: fromWorking(),
              to: fromConfig('server/serverless/_plugins.js'),
            }),
            resolveExtensions: bundle.extensions,
            sourcemap: environment === ENVIRONMENT.PRODUCTION ? undefined : 'inline',
            target: 'node18',
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
});
