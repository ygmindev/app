import type { DevServerOptions, WebpackEnvOptions } from '@callstack/repack';
import {
  ASSET_EXTENSIONS,
  getAssetExtensionsRegExp,
  getInitializationEntries,
  getPublicPath,
  getResolveOptions,
  RepackPlugin,
  SCALABLE_ASSETS,
} from '@callstack/repack';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globalsConfig } from '@lib/config/globals/globals.web.config';
import type { WebpackParamsModel } from '@lib/config/webpack/webpack.config.models';
import { webpackConfig as webpackConfigFrontend } from '@lib/config/webpack/webpack.frontend.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { NATIVE_EXTENSIONS } from '@lib/shared/file/file.constants';
import { join } from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';

export const webpackConfig =
  (params: WebpackParamsModel): ((env: WebpackEnvOptions) => Configuration) =>
  ({
    assetsPath,
    bundleFilename,
    context,
    devServer,
    mode,
    platform,
    reactNativePath,
    sourceMapFilename,
  }) => {
    const _mode = mode as 'development' | 'production';
    const _context = (context as string) || __dirname;
    const _platform = (platform as string) || getEnv('PLATFORM');
    const _devServer = devServer as DevServerOptions;

    return merge({
      strategy: MERGE_STRATEGY.DEEP_APPEND,

      values: [
        {
          context: _context,

          devtool: false,

          entry: [
            ...getInitializationEntries(reactNativePath as string, {
              hmr: _mode === 'development',
            }),
            fromWorking('src/index'),
          ],

          module: {
            rules: [
              {
                test: getAssetExtensionsRegExp(ASSET_EXTENSIONS),
                use: {
                  loader: '@callstack/repack/assets-loader',
                  options: {
                    devServerEnabled: _mode === 'development',
                    platform,
                    scalableAssetExtensions: SCALABLE_ASSETS,
                  },
                },
              },
            ],
          },

          optimization: {
            chunkIds: 'named',
            minimize: _mode === 'production',
            minimizer: [
              new TerserPlugin({
                extractComments: false,
                terserOptions: { format: { comments: false } },
                test: /\.(js)?bundle(\?.*)?$/i,
              }),
            ],
          },

          output: {
            chunkFilename: '[name].chunk.bundle',
            clean: true,
            filename: 'index.bundle',
            path: join(_context, 'build/generated', _platform),
            publicPath: getPublicPath({ devServer: _devServer, platform: _platform }),
          },

          plugins: [
            new RepackPlugin({
              context: _context,
              devServer,
              mode: _mode,
              output: { assetsPath, bundleFilename, sourceMapFilename },
              platform: _platform,
            }),
          ],

          resolve: {
            ...getResolveOptions(_platform),
            alias: { 'react-native': reactNativePath },
          },
        } as Configuration,

        webpackConfigFrontend(
          merge({
            strategy: MERGE_STRATEGY.DEEP_APPEND,

            values: [{ globals: globalsConfig }, params],
          }),
        ),

        {
          resolve: {
            extensions: [...NATIVE_EXTENSIONS],
          },
        },
      ],
    });
  };

// import type { DevServerOptions, WebpackEnvOptions } from '@callstack/repack';
// import {
//   ASSET_EXTENSIONS,
//   getAssetExtensionsRegExp,
//   getInitializationEntries,
//   getPublicPath,
//   getResolveOptions,
//   RepackPlugin,
//   SCALABLE_ASSETS,
// } from '@callstack/repack';
// import { merge } from '@lib/shared/core/utils/merge/merge';
// import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
// import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
// import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
// import { join } from 'path';
// import TerserPlugin from 'terser-webpack-plugin';
// import type { Configuration } from 'webpack';

// export const webpackNativeConfig = ({
//   assetsPath,
//   bundleFilename,
//   context,
//   devServer,
//   mode,
//   platform,
//   reactNativePath,
//   sourceMapFilename,
// }: WebpackEnvOptions): Configuration => {
//   const _mode = mode as 'development' | 'production';
//   const _context = (context as string) || __dirname;
//   const _platform = (platform as string) || getEnv('PLATFORM');
//   const _devServer = devServer as DevServerOptions;

//   return merge({
//     strategy: MERGE_STRATEGY.DEEP_APPEND,

//     values: [
//       {
//         context: _context,

//         devtool: false,

//         entry: [
//           ...getInitializationEntries(reactNativePath as string, {
//             hmr: _mode === 'development',
//           }),
//           fromWorking('src/index'),
//         ],

//         module: {
//           rules: [
//             {
//               test: getAssetExtensionsRegExp(ASSET_EXTENSIONS),
//               use: {
//                 loader: '@callstack/repack/assets-loader',
//                 options: {
//                   devServerEnabled: _mode === 'development',
//                   platform,
//                   scalableAssetExtensions: SCALABLE_ASSETS,
//                 },
//               },
//             },
//           ],
//         },

//         optimization: {
//           chunkIds: 'named',
//           minimize: _mode === 'production',
//           minimizer: [
//             new TerserPlugin({
//               extractComments: false,
//               terserOptions: { format: { comments: false } },
//               test: /\.(js)?bundle(\?.*)?$/i,
//             }),
//           ],
//         },

//         output: {
//           chunkFilename: '[name].chunk.bundle',
//           clean: true,
//           filename: 'index.bundle',
//           path: join(_context, 'build/generated', _platform),
//           publicPath: getPublicPath({ devServer: _devServer, platform: _platform }),
//         },

//         plugins: [
//           new RepackPlugin({
//             context: _context,
//             devServer,
//             mode: _mode,
//             output: { assetsPath, bundleFilename, sourceMapFilename },
//             platform: _platform,
//           }),
//         ],

//         resolve: {
//           ...getResolveOptions(_platform),
//           alias: {
//             'react-native': reactNativePath,
//           },
//         },
//       } as Configuration,

//     ],
//   });
// };
