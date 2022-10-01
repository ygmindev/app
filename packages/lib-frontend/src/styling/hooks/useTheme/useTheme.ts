import { lightThemeConfig } from '@lib/config/theme/light.config';
import type { ThemeConfigModel } from '@lib/config/theme/theme.models';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { THEMES } from '@lib/frontend/styling/hooks/useTheme/useTheme.constants';

export const useTheme = (): ThemeConfigModel =>
  useSelector((state) => THEMES[state.styling.theme] || lightThemeConfig);
