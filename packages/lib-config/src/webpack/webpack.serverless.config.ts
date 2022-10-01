import { webpackConfig as webpackConfigBackend } from '@lib/config/webpack/webpack.backend.config';
import type { WebpackParamsModel } from '@lib/config/webpack/webpack.config.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import slsw from 'serverless-webpack';
import type { Configuration } from 'webpack';

export const webpackConfig = (params: WebpackParamsModel): Configuration =>
  merge({
    strategy: MERGE_STRATEGY.DEEP_APPEND,
    values: [
      { output: { library: { type: 'commonjs2' } } },

      webpackConfigBackend({
        ...params,
        entry: slsw.lib.entries,
      }),
    ],
  }) as Configuration;
