import { lightConfig } from '@lib/config/style/theme/configs/light';
import type { ThemeConfigModel } from '@lib/config/style/theme/theme.models';
import { THEMES } from '@lib/frontend/style/hooks/useTheme/useTheme.constants';
import { useStore } from '@lib/frontend/style/stores/styleReducer/styleReducer';

export const useTheme = (): ThemeConfigModel => {
  const { theme } = useStore();
  return THEMES[theme] || lightConfig;
};
