import themeConfig from '@lib/config/style/theme/configs/theme.config';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { useMemo } from 'react';

export const useTheme = (): UseThemeModel => {
  const brightness = useStore((state) => state.style.brightness);
  return useMemo<UseThemeModel>(() => themeConfig(brightness), [themeConfig, brightness]);
};
