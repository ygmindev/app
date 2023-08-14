import { type ThemeConfigModel } from '#lib-config/style/theme/theme.models';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import { type ThemeColorModel } from '#lib-frontend/style/style.models';
import { FONT_FAMILY } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { type PartialDeepModel } from '#lib-shared/core/core.models';

export const THEME_COLOR_TONES: Record<ThemeColorModel, string> = {
  [THEME_COLOR.ERROR]: '#F44336',
  [THEME_COLOR.PRIMARY]: '#5469D4',
  [THEME_COLOR.SECONDARY]: '#8C8C8C',
  [THEME_COLOR.SUCCESS]: '#28A745',
  [THEME_COLOR.WARNING]: '#FFB52E',
};

export const THEME_CONFIG = {
  animation: {
    effect: 150,

    transition: 400,
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

    weight: {
      bold: '700',

      main: '400',
    },
  },

  layout: {
    dropdown: {
      maxHeight: 300,
    },

    header: {
      height: 50,
    },

    height: {
      [THEME_SIZE.SMALL]: 250,

      [THEME_SIZE.MEDIUM]: 500,

      [THEME_SIZE.LARGE]: 750,
    },

    navigation: {
      width: 300,
    },

    width: {
      [THEME_SIZE.SMALL]: 250,

      [THEME_SIZE.MEDIUM]: 500,

      [THEME_SIZE.LARGE]: 750,
    },
  },

  notification: {
    duration: 5000,

    width: 380,
  },

  opaque: 0.7,

  shape: {
    borderRadius: {
      [THEME_SIZE_MORE.LARGE]: 30,

      [THEME_SIZE_MORE.MEDIUM]: 20,

      [THEME_SIZE_MORE.SMALL]: 8,
    },

    height: {
      [THEME_SIZE_MORE.LARGE]: 52,

      [THEME_SIZE_MORE.MEDIUM]: 47,

      [THEME_SIZE_MORE.SMALL]: 32,

      [THEME_SIZE_MORE.XLARGE]: 60,

      [THEME_SIZE_MORE.XSMALL]: 28,
    },

    spacing: {
      [THEME_SIZE_MORE.LARGE]: 28,

      [THEME_SIZE_MORE.MEDIUM]: 16,

      [THEME_SIZE_MORE.SMALL]: 8,
    },
  },
} satisfies PartialDeepModel<ThemeConfigModel>;
