import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { WebpackParamsModel } from '@lib/config/webpack/webpack.config.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { NODE_EXTENSIONS } from '@lib/shared/file/file.constants';
import { ESLINT_CLI_PARAMS } from '@tool/task/node/templates/lint/lint.constants';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import type { Options } from 'eslint-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { keys, mapValues } from 'lodash';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { Configuration, ResolveOptions, RuleSetRule, WebpackPluginInstance } from 'webpack';
import { DefinePlugin, EnvironmentPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const webpackConfig = ({
  entry,
  transpile,
  loader = { loader: 'babel-loader' },
  globals,
}: WebpackParamsModel): Configuration => {
  const _loader = merge({
    strategy: MERGE_STRATEGY.DEEP_APPEND,

    values: [
      { options: loader.loader.includes('babel') ? require(fromWorking('babel.config.js')) : {} },
      loader,
    ],
  });

  return {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,

    entry,

    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

    module: {
      parser: { javascript: { reexportExportsPresence: false } },

      rules: [
        transpile && { include: transpile, test: /\.[cmtj]sx?$/i, use: [_loader] },

        { exclude: [/node_modules/], test: /\.[cmtj]sx?$/i, use: [_loader] },
      ].filter(Boolean) as Array<RuleSetRule>,

      strictExportPresence: false,
    },

    optimization: {
      minimize: process.env.NODE_ENV === 'production',
    },

    output: {
      filename: '[name].js',

      path: fromWorking('dist'),
    },

    plugins: [
      new ESLintPlugin({
        ...(ESLINT_CLI_PARAMS as Options),
        files: [fromWorking('src/**/*.{ts,tsx,js,jsx}')],
      }),

      new ForkTsCheckerWebpackPlugin(),

      new EnvironmentPlugin(keys(process.env)),

      new DefinePlugin({
        'process.env': mapValues(process.env, JSON.stringify),
        ...mapValues(globals, JSON.stringify),
      }),

      new CircularDependencyPlugin({
        allowAsyncCycles: true,
        exclude: /node_modules/,
        failOnError: true,
      }),

      process.env.NODE_ENV === 'production' && new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ].filter(Boolean) as Array<WebpackPluginInstance>,

    resolve: {
      extensions: [...NODE_EXTENSIONS, '...'],

      plugins: [new TsconfigPathsPlugin({ silent: true })],
    } as ResolveOptions,

    stats: 'minimal',
  };
};
