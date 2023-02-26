import { themeConfig } from '@lib/config/style/theme/configs/theme.config';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

export const useTheme = (): UseThemeModel => {
  const brightness = useStore((state) => state.style.brightness);
  const device = useColorScheme();
  // const _brightness = brightness || device || STYLE_BRIGHTNESS.LIGHT;
  const _brightness = brightness || STYLE_BRIGHTNESS.LIGHT;
  return useMemo<UseThemeModel>(
    () => ({
      ...themeConfig,
      colors: {
        activeLightness: themeConfig.colors.activeLightness,

        disabledOpacity: themeConfig.colors.disabledOpacity,

        tone: (Object.keys(themeConfig.colors.tone) as Array<ThemeColorModel>).reduce(
          (result, key) => {
            const color = themeConfig.colors.tone[key] as ThemeColorModel;
            const _palette = themeConfig.colors.palette[_brightness][key];
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
          {} as UseThemeModel['colors']['tone'],
        ),
      },
    }),
    [_brightness, themeConfig],
  );
};
