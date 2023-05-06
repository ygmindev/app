import type {
  _ThemeConfigModel,
  _ThemeConfigParamsModel,
} from '@lib/config/style/theme/_theme.models';
import type { ThemeColorModel, ThemeModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';

export const _themeConfig =
  (themeConfig: _ThemeConfigParamsModel): _ThemeConfigModel =>
  (brightness) => ({
    ...themeConfig,
    colors: {
      activeLightness: themeConfig.colors.activeLightness,

      disabledOpacity: themeConfig.colors.disabledOpacity,

      tone: (Object.keys(themeConfig.colors.tone) as Array<ThemeColorModel>).reduce(
        (result, key) => {
          const color = themeConfig.colors.tone[key] as ThemeColorModel;
          const _palette =
            themeConfig.colors.palette[brightness][key === 'neutral' ? 'neutral' : 'theme'];
          return {
            ...result,
            [key]: {
              main: palette({ color, ..._palette.main }),
              mainContrast: palette({ color, ..._palette.mainContrast }),
              muted: palette({ color, ..._palette.muted }),
              mutedContrast: palette({ color, ..._palette.mutedContrast }),
            },
          };
        },
        {} as ThemeModel['colors']['tone'],
      ),
    },
  });
