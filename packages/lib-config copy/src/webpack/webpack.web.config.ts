import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globalsConfig } from '@lib/config/globals/globals.web';
import type { WebpackParamsModel } from '@lib/config/webpack/webpack.config.models';
import { webpackConfig as webpackConfigFrontend } from '@lib/config/webpack/webpack.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { EXTENSIONS_WEB } from '@lib/shared/file/file.constants';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration, WebpackPluginInstance } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const webpackConfig = (
  params: WebpackParamsModel,
): Configuration & { devServer: DevServerConfiguration } =>
  merge({
    strategy: MERGE_STRATEGY.DEEP_APPEND,

    values: [
      {
        devServer: {
          devMiddleware: { writeToDisk: true },
        },

        module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                process.env.NODE_ENV === ENVIRONMENT.PRODUCTION
                  ? MiniCssExtractPlugin.loader
                  : 'style-loader',
                'css-loader',
              ],
            },

            {
              include: fromRoot('node_modules/react-native-vector-icons'),
              test: /\.ttf$/,
              type: 'asset/resource',
            },
          ],
        },

        plugins: [
          new CopyWebpackPlugin({
            patterns: [
              { force: true, from: fromStatic('assets'), to: fromWorking('public/assets') },
            ],
          }),

          process.env.NODE_ENV === ENVIRONMENT.PRODUCTION &&
            new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        ].filter(Boolean) as Array<WebpackPluginInstance>,

        resolve: { alias: { 'react-native$': 'react-native-web' } },
      },

      webpackConfigFrontend(
        merge({
          strategy: MERGE_STRATEGY.DEEP_APPEND,

          values: [{ globals: globalsConfig }, params],
        }),
      ),

      {
        resolve: {
          extensions: [...EXTENSIONS_WEB],
        },
      },
    ],
  });
