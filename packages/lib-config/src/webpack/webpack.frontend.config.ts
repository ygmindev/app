import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { webpackConfig as webpackConfigBase } from '@lib/config/webpack/webpack.base.config';
import type { WebpackParamsModel } from '@lib/config/webpack/webpack.config.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { FRONTEND_EXTENSIONS, TRANSPILE_GLOBS } from '@lib/shared/file/file.constants';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { Configuration, WebpackPluginInstance } from 'webpack';

export const webpackConfig = (params: WebpackParamsModel): Configuration =>
  merge({
    strategy: MERGE_STRATEGY.DEEP_APPEND,

    values: [
      {
        plugins: [process.env.NODE_ENV === 'development' && new ReactRefreshPlugin()].filter(
          Boolean,
        ) as Array<WebpackPluginInstance>,
      },

      webpackConfigBase(
        merge({
          strategy: MERGE_STRATEGY.DEEP_APPEND,

          values: [
            {
              transpile: fromGlobs({
                globs: TRANSPILE_GLOBS,
                isAbsolute: true,
                root: fromRoot('node_modules'),
              }),
            },
            params,
          ],
        }),
      ),

      {
        resolve: {
          extensions: [...FRONTEND_EXTENSIONS],
        },
      },
    ],
  }) as Configuration;
