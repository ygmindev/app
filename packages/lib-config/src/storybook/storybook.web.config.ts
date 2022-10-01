import { storybookConfig as storybookConfigBase } from '@lib/config/storybook/storybook.config';
import { mergeWebpackConfig } from '@lib/config/webpack/utils/mergeWebpackConfig/mergeWebpackConfig';
import { webpackConfig } from '@lib/config/webpack/webpack.web.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { StorybookConfig } from '@storybook/core-common';

export const storybookConfig: StorybookConfig = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      addons: ['@storybook/addon-essentials'],

      webpackFinal: (config) =>
        mergeWebpackConfig(webpackConfig({ globals: { __NAME__: 'APP_STORYBOOK' } }), config),
    },

    storybookConfigBase,
  ],
});
