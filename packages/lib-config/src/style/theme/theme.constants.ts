import { type ThemeConfigModel } from '@lib/config/style/theme/theme.models';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { type ThemeColorModel } from '@lib/frontend/style/style.models';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const THEME_COLOR_TONES: Record<ThemeColorModel, string> = {
  [THEME_COLOR.ERROR]: '#f44336',
  [THEME_COLOR.PRIMARY]: '#151c6d',
  // [THEME_COLOR.PRIMARY]: '#000000',
  [THEME_COLOR.SECONDARY]: '#00DCDC',
  [THEME_COLOR.SUCCESS]: '#28a745',
  [THEME_COLOR.WARNING]: '#ffb52e',
};

export const THEME_CONFIG = {
  animation: {
    effect: 150,

    transition: 250,
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
      [THEME_SIZE_MORE.XLARGE]: 38,
      [THEME_SIZE_MORE.XSMALL]: 10,
    },

    weight: {
      bold: '500',

      main: '400',
    },
  },

  layout: {
    dropdown: {
      maxHeight: 300,
    },

    header: {
      height: 58,
    },

    height: {
      [THEME_SIZE.SMALL]: 250,

      [THEME_SIZE.MEDIUM]: 500,

      [THEME_SIZE.LARGE]: 750,
    },

    navigation: {
      width: 300,
    },

    scrollBar: {
      thickness: 8,
    },

    width: {
      [THEME_SIZE.SMALL]: 350,

      [THEME_SIZE.MEDIUM]: 500,

      [THEME_SIZE.LARGE]: 750,
    },
  },

  notification: {
    duration: 5000,

    width: 380,
  },

  opaque: {
    [THEME_SIZE.LARGE]: 0.65,

    [THEME_SIZE.MEDIUM]: 0.4,

    [THEME_SIZE.SMALL]: 0.2,
  },

  shape: {
    borderRadius: {
      [THEME_SIZE.LARGE]: 30,

      [THEME_SIZE.MEDIUM]: 20,
      // [THEME_SIZE.MEDIUM]: 8,

      [THEME_SIZE.SMALL]: 8,
    },

    shadow: {
      elevation: 1.5,

      opacity: 0.5,

      size: 5,
    },

    size: {
      [THEME_SIZE.LARGE]: 55,

      [THEME_SIZE.MEDIUM]: 52,

      [THEME_SIZE.SMALL]: 32,

      [THEME_SIZE_MORE.XLARGE]: 60,

      [THEME_SIZE_MORE.XSMALL]: 20,
    },

    spacing: {
      [THEME_SIZE.LARGE]: 40,

      [THEME_SIZE.MEDIUM]: 16,

      [THEME_SIZE.SMALL]: 6,
    },
  },
} satisfies PartialDeepModel<ThemeConfigModel>;
