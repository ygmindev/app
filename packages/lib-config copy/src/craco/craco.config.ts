import type { CracoConfig } from '@craco/craco';
import { mergeWebpackConfig } from '@lib/config/webpack/utils/mergeWebpackConfig/mergeWebpackConfig';
import type { WebpackParamsModel } from '@lib/config/webpack/webpack.config.models';
import { webpackConfig } from '@lib/config/webpack/webpack.web';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { Configuration } from 'webpack';

export const cracoConfig = (params: WebpackParamsModel): CracoConfig => {
  const webpackWebConfig = webpackConfig(params);
  return {
    devServer: (config) => merge({ values: [webpackWebConfig.devServer, config] }),
    webpack: {
      configure: (config) => mergeWebpackConfig(webpackWebConfig, config as Configuration),
    },
  } as CracoConfig;
};
