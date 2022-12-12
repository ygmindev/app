import { themeLightConfig } from '@lib/config/style/theme/configs/theme.light';
import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { THEMES } from '@lib/frontend/style/hooks/useTheme/useTheme.constants';
import { useStore } from '@lib/frontend/style/stores/styleReducer/styleReducer';

export const useTheme = (): ThemeConfigParamsModel => {
  const { theme } = useStore();
  return THEMES[theme] || themeLightConfig;
};
