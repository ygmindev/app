import reduce from 'lodash/reduce';

import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { THEME_COLOR_TONES, THEME_CONFIG } from '#lib-config/style/theme/theme.constants';
import { type ThemeConfigModel } from '#lib-config/style/theme/theme.models';
import { THEME_COLOR, THEME_ROLE, THEME_SHADE } from '#lib-frontend/style/style.constants';
import {
  type ThemeColorModel,
  type ThemeRoleModel,
  type ThemeShadeModel,
} from '#lib-frontend/style/style.models';
import { palette } from '#lib-frontend/style/utils/palette/palette';

const COLOR_SURFACE_BASE = '#FFFFFF';
const COLOR_SURFACE_CONTRAST = '#000000';
const COLOR_BORDER = '#8C8C8C';
const LIGHTNESS_THEME_MUTED = 75;
const LIGHTNESS_SURFACE_MUTED = 40;

const { _config, config } = defineConfig({
  config: {
    ...THEME_CONFIG,

    color: {
      border: COLOR_BORDER,

      isDark: false,

      palette: {
        surface: {
          [THEME_SHADE.MAIN]: {
            [THEME_ROLE.BASE]: COLOR_SURFACE_BASE,
            [THEME_ROLE.CONTRAST]: COLOR_SURFACE_CONTRAST,
          },
          [THEME_SHADE.MUTED]: {
            [THEME_ROLE.BASE]: palette(COLOR_SURFACE_BASE, { lightness: LIGHTNESS_SURFACE_MUTED }),
            [THEME_ROLE.CONTRAST]: COLOR_SURFACE_CONTRAST,
          },
        },

        ...reduce(
          Object.values(THEME_COLOR),
          (result, color) => {
            const tone = THEME_COLOR_TONES[color];
            return {
              ...result,
              [color]: {
                [THEME_SHADE.MAIN]: {
                  [THEME_ROLE.BASE]: tone,
                  [THEME_ROLE.CONTRAST]: COLOR_SURFACE_BASE,
                },
                [THEME_SHADE.MUTED]: {
                  [THEME_ROLE.BASE]: palette(tone, { lightness: LIGHTNESS_THEME_MUTED }),
                  [THEME_ROLE.CONTRAST]: COLOR_SURFACE_BASE,
                },
              },
            };
          },
          {} as Record<ThemeColorModel, Record<ThemeShadeModel, Record<ThemeRoleModel, string>>>,
        ),
      },
    },
  } satisfies ThemeConfigModel,
});

export { _config, config };
