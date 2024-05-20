import { _theme } from '@lib/config/theme/_theme';
import { THEME_COLOR_TONES, THEME_CONFIG } from '@lib/config/theme/theme.constants';
import { type ThemeConfigModel } from '@lib/config/theme/theme.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { THEME_COLOR, THEME_COLOR_MORE, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { type ThemeColorModel, type ThemeRoleModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import reduce from 'lodash/reduce';

const COLOR_SURFACE_BASE = '#FFFFFF';
const COLOR_SURFACE_CONTRAST = '#000000';
const COLOR_BORDER = '#A2A2A2';
const LIGHTNESS_ACTIVE = 0.4;
const LIGHTNESS_THEME_MUTED = 0.85;
const LIGHTNESS_SURFACE_MUTED = 0.8;

const { _config, config } = defineConfig({
  _config: _theme,

  config: {
    ...THEME_CONFIG,

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
          {} as Record<ThemeColorModel, Record<ThemeRoleModel, string>>,
        ),
      },
    },
  } satisfies ThemeConfigModel,
});

export { _config, config };
