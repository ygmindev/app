import reduce from 'lodash/reduce';

import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _theme } from '#lib-config/style/theme/_theme';
import { config as configBase } from '#lib-config/style/theme/theme.base';
import { THEME_COLOR_TONES } from '#lib-config/style/theme/theme.constants';
import { THEME_COLOR, THEME_ROLE } from '#lib-frontend/style/style.constants';
import { type ThemeColorModel, type ThemeRoleModel } from '#lib-frontend/style/style.models';
import { palette } from '#lib-frontend/style/utils/palette/palette';

const COLOR_SURFACE_BASE = '#000000';
const COLOR_SURFACE_CONTRAST = '#FFFFFF';
const COLOR_BORDER = '#8C8C8C';
const LIGHTNESS_ACTIVE = 40;
const LIGHTNESS_THEME_BASE = 80;
const LIGHTNESS_THEME_CONTRAST = 20;
const LIGHTNESS_THEME_MUTED = 30;
const LIGHTNESS_SURFACE_MUTED = 90;

const { _config, config } = defineConfig({
  _config: _theme,

  config: configBase,

  overrides: [
    {
      color: {
        border: COLOR_BORDER,

        isDark: true,

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
                  [THEME_ROLE.MAIN]: palette(tone, { lightness: LIGHTNESS_THEME_BASE }),
                  [THEME_ROLE.CONTRAST]: palette(tone, { lightness: LIGHTNESS_THEME_CONTRAST }),
                  [THEME_ROLE.MUTED]: palette(tone, { lightness: LIGHTNESS_THEME_MUTED }),
                },
              };
            },
            {} as Record<ThemeColorModel, Record<ThemeRoleModel, string>>,
          ),
        },
      },
    },
  ],
});

export { _config, config };