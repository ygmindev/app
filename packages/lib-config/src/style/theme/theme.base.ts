import reduce from 'lodash/reduce';

import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { THEME_COLOR_TONES, THEME_CONFIG } from '#lib-config/style/theme/theme.constants';
import { type ThemeConfigModel } from '#lib-config/style/theme/theme.models';
import { THEME_COLOR, THEME_ROLE } from '#lib-frontend/style/style.constants';
import { type ThemeColorModel, type ThemeRoleModel } from '#lib-frontend/style/style.models';
import { palette } from '#lib-frontend/style/utils/palette/palette';

const COLOR_SURFACE_BASE = '#FFFFFF';
const COLOR_SURFACE_CONTRAST = '#000000';
const COLOR_BORDER = '#A2A2A2';
const LIGHTNESS_ACTIVE = 40;
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
          {} as Record<ThemeColorModel, Record<ThemeRoleModel, string>>,
        ),
      },
    },
  } satisfies ThemeConfigModel,
});

export { _config, config };
