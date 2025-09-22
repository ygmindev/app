import { THEME_ANIMATION, THEME_COLOR_TONES } from '@lib/config/theme/theme.constants';
import { type ThemeConfigModel } from '@lib/config/theme/theme.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import reduce from 'lodash/reduce';

const COLOR_SURFACE_BASE = '#FFFFFF';
const COLOR_SURFACE_CONTRAST = '#000000';
const COLOR_BORDER = '#A2A2A2';
const LIGHTNESS_ACTIVE = 0.4;
const LIGHTNESS_THEME_MUTED = 0.85;
const LIGHTNESS_SURFACE_MUTED = 0.9;

export const config = defineConfig<ThemeConfigModel>({
  params: () => ({
    animation: THEME_ANIMATION,

    color: {
      border: COLOR_BORDER,

      isDark: false,

      palette: {
        [THEME_COLOR_MORE.SURFACE]: {
          [THEME_ROLE.ACTIVE]: palette(COLOR_SURFACE_BASE, { lightness: LIGHTNESS_ACTIVE }),
          [THEME_ROLE.MAIN]: COLOR_SURFACE_BASE,
          [THEME_ROLE.CONTRAST]: COLOR_SURFACE_CONTRAST,
          [THEME_ROLE.MUTED]: palette(COLOR_SURFACE_BASE, { lightness: LIGHTNESS_SURFACE_MUTED }),
        },

        ...reduce(
          Object.values(THEME_COLOR),
          (result, color) => {
            const tone = THEME_COLOR_TONES[color];
            return {
              ...result,
              [color]: {
                [THEME_ROLE.ACTIVE]: palette(tone, { lightness: LIGHTNESS_ACTIVE }),
                [THEME_ROLE.MAIN]: tone,
                [THEME_ROLE.CONTRAST]: COLOR_SURFACE_BASE,
                [THEME_ROLE.MUTED]: palette(tone, { lightness: LIGHTNESS_THEME_MUTED }),
              },
            };
          },
          {} as Record<THEME_COLOR, Record<THEME_ROLE, string>>,
        ),
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

        width: 250,
      },

      height: {
        [THEME_SIZE.SMALL]: 250,

        [THEME_SIZE.MEDIUM]: 500,

        [THEME_SIZE.LARGE]: 750,
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
      [THEME_SIZE.LARGE]: 0.9,

      [THEME_SIZE.MEDIUM]: 0.5,

      [THEME_SIZE.SMALL]: 0.2,
    },

    shape: {
      borderRadius: {
        [THEME_SIZE_MORE.XLARGE]: 30,

        [THEME_SIZE.LARGE]: 25,

        [THEME_SIZE.MEDIUM]: 20,

        [THEME_SIZE.SMALL]: 8,

        [THEME_SIZE_MORE.XSMALL]: 5,
      },

      height: {
        [THEME_SIZE.LARGE]: 60,

        [THEME_SIZE.MEDIUM]: 48,

        [THEME_SIZE.SMALL]: 32,

        [THEME_SIZE_MORE.XLARGE]: 60,

        [THEME_SIZE_MORE.XSMALL]: 20,
      },

      scaling: {
        [THEME_SIZE.LARGE]: 0.9,

        [THEME_SIZE.MEDIUM]: 0.7,

        [THEME_SIZE.SMALL]: 0.5,
      },

      shadow: {
        elevation: 1.5,

        opacity: 0.5,

        size: 5,
      },

      size: {
        [THEME_SIZE.LARGE]: 60,

        [THEME_SIZE.MEDIUM]: 48,

        [THEME_SIZE.SMALL]: 32,

        [THEME_SIZE_MORE.XLARGE]: 60,

        [THEME_SIZE_MORE.XSMALL]: 20,
      },

      spacing: {
        [THEME_SIZE.LARGE]: 40,

        [THEME_SIZE.MEDIUM]: 12,

        [THEME_SIZE.SMALL]: 6,
      },

      width: {
        [THEME_SIZE.LARGE]: 150,

        [THEME_SIZE.MEDIUM]: 100,

        [THEME_SIZE.SMALL]: 50,

        [THEME_SIZE_MORE.XLARGE]: 200,

        [THEME_SIZE_MORE.XSMALL]: 25,
      },
    },
  }),
});

export default config;
