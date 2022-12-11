import { commonConfig } from '@lib/config/style/theme/configs/common';
import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const lightConfig: ThemeConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_APPEND,

  values: [
    {
      colors: {
        background: {
          contrast: '#171717',
          main: '#fff',
          muted: '#e7e7e7',
        },

        border: '#ccd0d6',

        text: {
          contrast: '#fff',
          main: '#404452',
          muted: '#5f6368',
        },
      },

      id: 'light',

      name: ({ t }) => t('theme:labels.light'),
    },

    commonConfig,
  ],
});
