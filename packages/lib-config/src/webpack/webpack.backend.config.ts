import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globalsConfig } from '@lib/config/globals/globals.backend.config';
import { webpackConfig as webpackConfigBase } from '@lib/config/webpack/webpack.base.config';
import type { WebpackParamsModel } from '@lib/config/webpack/webpack.config.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { BACKEND_EXTENSIONS, PACKAGE_PREFIXES } from '@lib/shared/file/file.constants';
import type { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

export const webpackConfig = (params: WebpackParamsModel): Configuration =>
  merge({
    strategy: MERGE_STRATEGY.DEEP_APPEND,

    values: [
      {
        externals: [
          nodeExternals({
            allowlist: PACKAGE_PREFIXES.map((prefix) => RegExp(`^@${prefix}`)),
            modulesDir: fromRoot('node_modules'),
          }),
        ],

        externalsPresets: { node: true },

        node: {
          __dirname: true,
          __filename: true,
        },

        optimization: { minimize: false },

        plugins: [
          // new CopyWebpackPlugin({
          //   patterns: [
          //     {
          //       from: fromStatic('mail'),
          //       to: 'mail',
          //     },
          //     // Python
          //     isDev && {
          //       from: fromWorking('src/**/*.py'),
          //       to: fromWorking('dist', 'service'),
          //     },
          //   ].filter(Boolean) as Array<ObjectPattern>,
          // }),
        ],

        target: 'node',
      },

      webpackConfigBase(
        merge({
          strategy: MERGE_STRATEGY.DEEP_APPEND,

          values: [
            {
              globals: globalsConfig,

              loader: { loader: 'ts-loader', options: { transpileOnly: true } },
            },
            { ...params, entry: params.entry || { index: fromWorking('src/index') } },
          ],
        }),
      ),

      {
        resolve: {
          extensions: [...BACKEND_EXTENSIONS],
        },
      },
    ],
  }) as Configuration;
