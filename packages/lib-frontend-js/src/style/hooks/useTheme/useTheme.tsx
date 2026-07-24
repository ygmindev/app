import { themeConfig as configBase } from '@lib/config/theme/theme.base';
import { themeConfig as configDark } from '@lib/config/theme/theme.dark';
import { useDevice } from '@lib/frontend/settings/hooks/useDevice/useDevice';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { type UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import { useMemo } from 'react';

export const useTheme = (): UseThemeModel => {
  const [brightness] = useStore('style.brightness');
  const { brightness: systemBrightness } = useDevice();
  return useMemo<UseThemeModel>(() => {
    const brightnessF =
      !brightness || brightness === STYLE_BRIGHTNESS.SYSTEM ? systemBrightness : brightness;
    switch (brightnessF) {
      case STYLE_BRIGHTNESS.DARK: {
        return configDark.params();
      }
      default: {
        return configBase.params();
      }
    }
  }, [brightness, systemBrightness]);
};
