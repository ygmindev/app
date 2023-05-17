import { _themeConfig } from '@lib/config/style/theme/_theme';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { ThemeColorModel, ThemeModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { useMemo } from 'react';

export const useTheme = (): UseThemeModel => {
  const brightness = useStore((state) => state.style.brightness);
  const themeConfig = await _themeConfig();
  return useMemo<UseThemeModel>(() => ({
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
  }), [themeConfig, brightness]);
};
