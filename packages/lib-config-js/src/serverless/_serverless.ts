import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib/config/serverless/serverless.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { HTTP_PROTOCOL } from '@lib/shared/http/http.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import reduce from 'lodash/reduce';

export const _serverless = ({
  buildDir,
  bundle,
  dotenv,
  // environment,
  functions,
  memory,
  name,
  platform,
  provider,
  prunePatterns,
  region,
  server,
  timeout,
}: ServerlessConfigModel): _ServerlessConfigModel => {
  const environment = Container.get(Environment);
  const { build, esbuild, optimizeDeps } = _bundle(bundle);
  const { certificate, cors, host, port } = server;
  const isContainer = environment.variables.SERVERLESS_RUNTIME === 'container';
  const platformParams: PartialDeepModel<_ServerlessConfigModel> = (() => {
    switch (platform) {
      case PLATFORM.NODE:
        return {
          build: {
            esbuild: false,
          },
          custom: {
            esbuild: {
              ...esbuild,
              ...optimizeDeps?.esbuildOptions,
              bundle: true,
              exclude: ['*'],
              format: 'cjs',
              // installExtraArgs: ['--shamefully-hoist'],
              keepOutputDirectory: true,
              outputWorkFolder: buildDir,
              packager: 'pnpm',
              plugins: toRelative({ to: fromConfig('serverless/_plugins.js') }),
              watch: { pattern: build?.watch?.include },
            },

            ...(isContainer ? {} : { layerConfig: { installLayers: false } }),
          },

          ...(isContainer
            ? {}
            : {
                layers: {
                  custom: {
                    compatibleRuntimes: ['nodejs18.x'],
                    package: {
                      patterns: prunePatterns.map((pattern) => `!nodejs/${pattern}`),
                    },
                    // TODO: move all layers to config
                    path: `./${buildDir}/layers`,
                    retain: true,
                  },
                },
              }),

          plugins: filterNil([
            !isContainer && 'serverless-plugin-layer-manager',
            'serverless-esbuild',
          ]),

          provider: {
            runtime: 'nodejs20.x',

            ...(isContainer
              ? {
                  ecr: {
                    images: {
                      [name]: {
                        path: fromWorking(),
                      },
                    },
                  },
                  iamRoleStatements: [
                    {
                      Action: [
                        'ec2:CreateNetworkInterface',
                        'ec2:DescribeNetworkInterfaces',
                        'ec2:DeleteNetworkInterface',
                      ],
                      Effect: 'Allow',
                      Resource: '*',
                    },
                  ],
                }
              : {}),
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
          (process.env.NODE_ENV === 'development' ||
            process.env.NODE_ENV === 'test') &&
            !environment.variables.NODE_RUNTIME &&
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
            allowCache: environment.variables.SERVER_IS_DISABLE_HOT_RELOAD,
            host: host?.split('://')[1],
            httpPort: port,
            httpsProtocol: certificate.certificateDir,
            ignoreJWTSignature: true,
            lambdaPort: null,
            noPrependStageInUrl: true,
            websocketPort: environment.variables.SERVER_APP_WEBSOCKET_PORT,
          },
        },

        functions: reduce(
          functions,
          (result, v, k) => ({
            ...result,
            [k]: {
              ephemeralStorageSize: 1024,
              events:
                v.protocol === HTTP_PROTOCOL.WEBSOCKET
                  ? [
                      { websocket: { route: '$connect' } },
                      { websocket: { route: '$disconnect' } },
                      { websocket: { route: '$default' } },
                    ]
                  : [{ httpApi: { method: v.method, path: trimPathname(v.pathname) } }],

              ...(isContainer
                ? {
                    image: {
                      command: v.handler,
                      entryPoint: '/lambda-entrypoint.sh',
                      name,
                    },
                  }
                : { handler: v.handler, layers: [{ Ref: 'CustomLambdaLayer' }] }),

              timeout,
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
          // TODO: too long - exclude PKs?
          // environment: getEnvironmentVariables({
          //   envPrefix: bundleConfigF.envPrefix,
          //   isPrefix: false,
          // }),
          httpApi: {
            cors: {
              allowedHeaders: cors.allowedHeaders,
              allowedOrigins: cors.allowedOrigins,
            },
          },
          memorySize: memory,
          name: provider,
          region: region as _ServerlessConfigModel['provider']['region'],
          stage: process.env.NODE_ENV,
          timeout,
          versionFunctions: false,
        },

        service: name,
      },
    ],

    MERGE_STRATEGY.DEEP_APPEND,
  );
};
