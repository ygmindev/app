import { config } from '@lib/config/style/theme/theme';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { ThemeColorModel, ThemeModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { useMemo } from 'react';

export const useTheme = (): UseThemeModel => {
  const brightness = useStore((state) => state.style.brightness);
  return useMemo<UseThemeModel>(
    () => ({
      ...config,
      colors: {
        activeLightness: config.colors.activeLightness,

        disabledOpacity: config.colors.disabledOpacity,

        tone: (Object.keys(config.colors.tone) as Array<ThemeColorModel>).reduce(
          (result, key) => {
            const color = config.colors.tone[key] as ThemeColorModel;
            const _palette =
            config.colors.palette[brightness][key === 'neutral' ? 'neutral' : 'theme'];
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
    }),
    [config, brightness],
  );
};
