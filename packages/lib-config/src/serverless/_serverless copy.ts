import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { config as fileConfig } from '@lib/config/core/file/file';
import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib/config/serverless/serverless.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import reduce from 'lodash/reduce';

export const _serverless = ({
  bundleConfig,
  dotenv,
  environment,
  functions,
  host,
  httpConfig,
  isContainer,
  name,
  platform,
  port,
  provider,
  server,
}: ServerlessConfigModel): _ServerlessConfigModel => {
  const bundleConfigF = bundleConfig();
  const httpConfigF = httpConfig();
  const { certificateDir } = httpConfigF.certificate;

  const platformParams: PartialDeepModel<_ServerlessConfigModel> = (() => {
    switch (platform) {
      case PLATFORM.NODE:
        return {
          custom: {
            // TODO: vscode debug point not working
            esbuild: {
              ...bundleConfigF.esbuild,
              ...bundleConfigF.optimizeDeps?.esbuildOptions,
              bundle: true,
              exclude: ['*'],
              format: 'cjs',
              installExtraArgs: ['--shamefully-hoist'],
              keepOutputDirectory: true,
              packager: 'pnpm',
              plugins: toRelative({ to: fromConfig('platform/serverless/_plugins.js') }),
              watch: { pattern: bundleConfigF.build?.watch?.include },
            },

            layerConfig: {
              installLayers: false,
            },
          },

          layers: {
            custom: {
              compatibleRuntimes: ['nodejs18.x'],
              package: {
                patterns: fileConfig.prunePatterns.map((pattern) => `!nodejs/${pattern}`),
              },
              // TODO: move all layers to config
              path: `./${fileConfig.buildPath}/layers`,
              retain: true,
            },
          },

          plugins: filterNil([
            !isContainer && 'serverless-plugin-layer-manager',
            !isContainer && 'serverless-esbuild',
          ]),

          provider: isContainer
            ? {
                ecr: {
                  images: {
                    [name]: {
                      path: fromWorking('src'),
                    },
                  },
                },
              }
            : {
                runtime: 'nodejs18.x',
              },
        };
      default:
        return {};
    }
  })();

  return merge(
    [
      {
        plugins: filterNil([
          (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
            'serverless-offline',
        ]),
      },

      platformParams,

      {
        custom: {
          dotenv: {
            dotenvParser: dotenv,
            logging: false,
          },

          'serverless-offline': {
            allowCache: process.env.SERVER_IS_DISABLE_HOT_RELOAD,
            host: host?.split('://')[1],
            httpPort: port,
            httpsProtocol: certificateDir,
            ignoreJWTSignature: true,
            lambdaPort: null,
            noPrependStageInUrl: true,
            websocketPort: process.env.SERVER_APP_WEBSOCKET_PORT,
          },
        },

        functions: reduce(
          functions,
          (result, v, k) => ({
            ...result,
            [k]: {
              ephemeralStorageSize: 1024,
              events:
                v.method === HTTP_METHOD.WEBSOCKET
                  ? [
                      { websocket: { route: '$connect' } },
                      { websocket: { route: '$disconnect' } },
                      { websocket: { route: '$default' } },
                    ]
                  : [{ httpApi: { method: v.method, path: trimPathname(v.pathname) } }],

              image: isContainer
                ? {
                    command: v.handler,
                    entryPoint: '/lambda-entrypoint.sh',
                    name,
                  }
                : {
                    handler: v.handler,
                    layers: [{ Ref: 'CustomLambdaLayer' }],
                  },

              timeout: server.timeout,
            },
          }),
          {},
        ),

        package: {
          excludeDevDependencies: true,
          individually: true,
        },

        plugins: ['serverless-dotenv-plugin'],

        provider: {
          environment: { ...process.env },
          httpApi: {
            cors: {
              allowedHeaders: server.cors.allowedHeaders,
              allowedOrigins: server.cors.allowedOrigins,
            },
          },
          memorySize: server.memory,
          name: provider,
          region: server.region as _ServerlessConfigModel['provider']['region'],
          stage: environment,
          timeout: server.timeout,
          versionFunctions: false,
        },

        service: name,
      },
    ],

    MERGE_STRATEGY.DEEP_APPEND,
  );
};
