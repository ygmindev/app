import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM');

export const themeConfig: ThemeConfigParamsModel = {
  animation: {
    duration: 150,
    transition: 500,
  },

  colors: {
    activeLightness: 55,

    palette: {
      dark: {
        [THEME_COLOR.ERROR]: {
          main: { lightness: 80 },
          mainContrast: { lightness: 20 },
          muted: { lightness: 30 },
          mutedContrast: { lightness: 90 },
        },
        [THEME_COLOR.PRIMARY]: {
          main: { lightness: 80 },
          mainContrast: { lightness: 20 },
          muted: { lightness: 30 },
          mutedContrast: { lightness: 90 },
        },
        [THEME_COLOR.SECONDARY]: {
          main: { lightness: 80 },
          mainContrast: { lightness: 20 },
          muted: { lightness: 30 },
          mutedContrast: { lightness: 90 },
        },
        [THEME_COLOR.SUCCESS]: {
          main: { lightness: 80 },
          mainContrast: { lightness: 20 },
          muted: { lightness: 30 },
          mutedContrast: { lightness: 90 },
        },
        [THEME_COLOR.NEUTRAL]: {
          main: { lightness: 100 },
          mainContrast: { lightness: 90 },
          muted: { lightness: 30 },
          mutedContrast: { lightness: 90 },
        },
        [THEME_COLOR.WARNING]: {
          main: { lightness: 80 },
          mainContrast: { lightness: 20 },
          muted: { lightness: 30 },
          mutedContrast: { lightness: 90 },
        },
      },
      light: {
        [THEME_COLOR.ERROR]: {
          main: { lightness: 50 },
          mainContrast: { lightness: 100 },
          muted: { lightness: 90 },
          mutedContrast: { lightness: 100 },
        },
        [THEME_COLOR.PRIMARY]: {
          main: { lightness: 50 },
          mainContrast: { lightness: 100 },
          muted: { lightness: 90 },
          mutedContrast: { lightness: 100 },
        },
        [THEME_COLOR.SECONDARY]: {
          main: { lightness: 50 },
          mainContrast: { lightness: 100 },
          muted: { lightness: 90 },
          mutedContrast: { lightness: 100 },
        },
        [THEME_COLOR.SUCCESS]: {
          main: { lightness: 50 },
          mainContrast: { lightness: 100 },
          muted: { lightness: 90 },
          mutedContrast: { lightness: 100 },
        },
        [THEME_COLOR.NEUTRAL]: {
          main: { lightness: 99 },
          mainContrast: { lightness: 10 },
          muted: { lightness: 80 },
          mutedContrast: { lightness: 10 },
        },
        [THEME_COLOR.WARNING]: {
          main: { lightness: 50 },
          mainContrast: { lightness: 100 },
          muted: { lightness: 90 },
          mutedContrast: { lightness: 100 },
        },
      },
    },

    tone: {
      [THEME_COLOR.ERROR]: '#F44336',
      [THEME_COLOR.PRIMARY]: '#5469D4',
      [THEME_COLOR.SECONDARY]: '#8C8C8C',
      [THEME_COLOR.SUCCESS]: '#28A745',
      [THEME_COLOR.WARNING]: '#FFB52E',
      [THEME_COLOR.NEUTRAL]: '#8C8C8C',
    },
  },

  font: {
    fontFamily: {
      [FONT_FAMILY.MAIN]:
        APP_PLATFORM === PLATFORM.IOS
          ? 'Helvetica Neue'
          : 'Lato, "Helvetica Neue", Arial, sans-serif',
      [FONT_FAMILY.STYLISH]: 'Merriweather, Georgia, Serif',
    },

    lineHeight: 25,

    size: {
      l: 23,
      m: 14,
      s: 11,
      xl: 34,
      xs: 8,
    },

    weight: 'normal',

    weightBold: '500',
  },

  layout: {
    header: {
      height: 60,
    },
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
