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
    duration: 150,

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
      bold: '500',

      main: 'normal',
    },
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

  notification: {
    duration: 5000,

    width: 380,
  },

  shape: {
    borderRadius: 20,

    height: {
      [THEME_SIZE_MORE.LARGE]: 52,

      [THEME_SIZE_MORE.MEDIUM]: 45,

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
