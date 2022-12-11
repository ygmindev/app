import { commonConfig } from '@lib/config/style/theme/configs/common';
import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const darkConfig: ThemeConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      colors: {
        background: {
          contrast: '#f5f5f5',
          main: '#000',
          muted: '#d6d6d6',
        },

        border: '#686868',

        text: {
          contrast: '#f9fafb',
          main: '#f5f5f5',
          muted: '#e5e5e5',
        },
      },

      id: 'dark',

      isDark: true,

      name: ({ t }) => t('theme:labels.dark'),
    },

    commonConfig,
  ],
});
