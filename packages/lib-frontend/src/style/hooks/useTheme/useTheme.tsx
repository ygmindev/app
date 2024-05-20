import { useMemo } from 'react';

import { config as configBase } from '@lib/config/theme/theme.base';
import { config as configDark } from '@lib/config/theme/theme.dark';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';

export const useTheme = (): UseThemeModel => {
  const [brightness] = useStore('style.brightness');
  return useMemo<UseThemeModel>(() => {
    switch (brightness) {
      case STYLE_BRIGHTNESS.DARK:
        return configDark;
      default:
        return configBase;
    }
  }, [brightness]);
};
