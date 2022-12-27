import { themeConfig } from '@lib/config/style/theme/configs/theme.config';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { keys } from 'lodash';
import { useMemo } from 'react';

export const useTheme = (): UseThemeModel => {
  const isDark = useStore((state) => state.style.isDark);
  return useMemo<UseThemeModel>(
    () => ({
      ...themeConfig,
      colors: (keys(themeConfig.colors) as Array<ThemeColorModel>).reduce((result, key) => {
        const color = themeConfig.colors[key] as ThemeColorModel;
        const _palette = themeConfig.palette[isDark ? 'dark' : 'light'][key];
        return {
          ...result,
          [key]: {
            main: palette({ color, ..._palette.main }),
            mainContrast: palette({ color, ..._palette.mainContrast }),
            muted: palette({ color, ..._palette.muted }),
            mutedContrast: palette({ color, ..._palette.mutedContrast }),
          },
        };
      }, {} as UseThemeModel['colors']),
      isDark,
    }),
    [themeConfig, isDark],
  );
};
