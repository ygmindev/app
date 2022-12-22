import { themeLightConfig } from '@lib/config/style/theme/configs/theme.light';
import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { THEMES } from '@lib/frontend/style/hooks/useTheme/useTheme.constants';

export const useTheme = (): ThemeConfigParamsModel => {
  const theme = useStore((state) => state.style.theme);
  return THEMES[theme] || themeLightConfig;
};
