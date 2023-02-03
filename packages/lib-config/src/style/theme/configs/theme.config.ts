import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const themeConfig: ThemeConfigParamsModel = {
  animation: {
    duration: 150,
    transition: 500,
  },

  colors: {
    activeLightness: 40,

    disabledLightness: 60,

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
          main: { lightness: 10 },
          mainContrast: { lightness: 90 },
          muted: { lightness: 10 },
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
        process.env.ENV_PLATFORM === PLATFORM.IOS
          ? 'Helvetica Neue'
          : 'Lato, "Helvetica Neue", Arial, sans-serif',

      [FONT_FAMILY.STYLISH]: 'Merriweather, Georgia, Serif',

      [FONT_FAMILY.CODE]: '"Menlo", "Consolas", monospace',
    },

    lineHeight: 25,

    size: {
      [THEME_SIZE.LARGE]: 20,
      [THEME_SIZE.MEDIUM]: 14,
      [THEME_SIZE.SMALL]: 12,
      [THEME_SIZE.XLARGE]: 34,
      [THEME_SIZE.XSMALL]: 10,
    },

    weight: 'normal',

    weightBold: '500',
  },

  layout: {
    header: {
      height: 60,
    },

    narrow: {
      width: 500,
    },
  },

  shape: {
    borderRadius: 20,

    height: {
      l: 52,
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
