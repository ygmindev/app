import { themeCommonConfig } from '@lib/config/style/theme/configs/theme.common';
import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { merge } from '@lib/shared/core/utils/merge/merge';

export const themeLightConfig: ThemeConfigParamsModel = merge({
  values: [
    {
      colors: {
        background: {
          main: '#fff',
          text: '#404452',
        },

        border: '#ccd0d6',

        shadow: '',
      },

      id: 'light',

      name: ({ t }) => t('theme:labels.light'),
    },

    themeCommonConfig,
  ],
});
