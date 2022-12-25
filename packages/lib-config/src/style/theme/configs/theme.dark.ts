import { themeCommonConfig } from '@lib/config/style/theme/configs/theme.common';
import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { merge } from '@lib/shared/core/utils/merge/merge';

export const themeDarkConfig: ThemeConfigParamsModel = merge({
  values: [
    {
      colors: {
        background: {
          main: '#000',
          text: '#f5f5f5',
        },

        border: '#686868',

        shadow: '',
      },

      id: 'dark',

      isDark: true,

      name: ({ t }) => t('theme:labels.dark'),
    },

    themeCommonConfig,
  ],
});
