import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { THEME_FONT_STYLE } from '@lib/frontend/style/style.constants';
import type { PartialDeepModel } from '@lib/shared/core/core.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM', PLATFORM.BASE);

export const themeCommonConfig: PartialDeepModel<ThemeConfigParamsModel> = {
  animation: {
    duration: 200,
    transition: 500,
  },

  colors: {
    error: {
      main: '#F44336',
    },
    primary: {
      main: '#5469d4',
    },
    secondary: {
      main: '#8c8c8c',
    },
    success: {
      main: '#28A745',
    },
    warning: {
      main: '#FFB52E',
    },
  },

  font: {
    fontFamily: {
      [THEME_FONT_STYLE.MAIN]:
        APP_PLATFORM === PLATFORM.IOS
          ? 'Helvetica Neue'
          : 'Lato, "Helvetica Neue", Arial, sans-serif',
      [THEME_FONT_STYLE.STYLISH]: 'Merriweather, Georgia, Serif',
    },

    lineHeight: 25,

    size: {
      l: 23,
      m: 15,
      s: 11,
      xl: 34,
      xs: 8,
    },

    weight: 'normal',

    weightBold: '500',
  },

  shape: {
    borderRadius: 18,
    height: {
      l: 50,
      m: 40,
      s: 32,
    },
    spacing: {
      l: 28,
      m: 16,
      s: 8,
    },
  },
};
