import { useMemo } from 'react';

import { config } from '#lib-config/style/theme/theme';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { type UseThemeModel } from '#lib-frontend/style/hooks/useTheme/useTheme.models';
import { type ThemeColorModel, type ThemeModel } from '#lib-frontend/style/style.models';
import { palette } from '#lib-frontend/style/utils/palette/palette';

export const useTheme = (): UseThemeModel => {
  const brightness = useStore((state) => state.style.brightness);
  return useMemo<UseThemeModel>(
    () => ({
      ...config,

      colors: {
        activeLightness: config.colors.activeLightness,

        disabledOpacity: config.colors.disabledOpacity,

        tone: (Object.keys(config.colors.tone) as Array<ThemeColorModel>).reduce((result, key) => {
          const color = config.colors.tone[key] as ThemeColorModel;
          const paletteF =
            config.colors.palette[brightness][key === 'neutral' ? 'neutral' : 'theme'];
          return {
            ...result,
            [key]: {
              main: palette({ color, ...paletteF.main }),
              mainContrast: palette({ color, ...paletteF.mainContrast }),
              muted: palette({ color, ...paletteF.muted }),
              mutedContrast: palette({ color, ...paletteF.mutedContrast }),
            },
          };
        }, {} as ThemeModel['colors']['tone']),
      },
    }),
    [config, brightness],
  );
};
