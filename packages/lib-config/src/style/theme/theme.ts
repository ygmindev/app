import { type ThemeConfigModel } from '#lib-config/style/theme/theme.models';
import {
  STYLE_BRIGHTNESS,
  THEME_COLOR,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '#lib-frontend/style/style.constants';
import { FONT_FAMILY } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { PLATFORM } from '#lib-platform/core/core.constants';

export const config: ThemeConfigModel = {
  animation: {
    duration: 150,
    transition: 400,
  },

  colors: {
    activeLightness: 40,

    disabledOpacity: 0.7,

    palette: {
      [STYLE_BRIGHTNESS.DARK]: {
        neutral: {
          main: { lightness: 10 },
          mainContrast: { lightness: 90 },
          muted: { lightness: 90 },
          mutedContrast: { lightness: 90 },
        },
        theme: {
          main: { lightness: 80 },
          mainContrast: { lightness: 20 },
          muted: { lightness: 30 },
          mutedContrast: { lightness: 90 },
        },
      },

      [STYLE_BRIGHTNESS.LIGHT]: {
        neutral: {
          main: { lightness: 99 },
          mainContrast: { lightness: 10 },
          muted: { lightness: 75 },
          mutedContrast: { lightness: 10 },
        },
        theme: {
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
      [THEME_SIZE_MORE.LARGE]: 20,
      [THEME_SIZE_MORE.MEDIUM]: 14,
      [THEME_SIZE_MORE.SMALL]: 12,
      [THEME_SIZE_MORE.XLARGE]: 34,
      [THEME_SIZE_MORE.XSMALL]: 10,
    },

    weight: 'normal',

    weightBold: '500',
  },

  layout: {
    header: {
      height: 60,
    },

    height: {
      [THEME_SIZE.SMALL]: 250,
      [THEME_SIZE.MEDIUM]: 500,
      [THEME_SIZE.LARGE]: 750,
    },

    width: {
      [THEME_SIZE.SMALL]: 250,
      [THEME_SIZE.MEDIUM]: 500,
      [THEME_SIZE.LARGE]: 750,
    },
  },

  shape: {
    borderRadius: 20,

    height: {
      l: 52,
      m: 45,
      s: 32,
      xl: 60,
      xs: 28,
    },

    spacing: {
      l: 28,
      m: 16,
      s: 8,
    },
  },
};
