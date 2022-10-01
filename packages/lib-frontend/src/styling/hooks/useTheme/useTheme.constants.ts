import { darkThemeConfig } from '@lib/config/theme/dark.config';
import { lightThemeConfig } from '@lib/config/theme/light.config';
import type { ThemeConfigModel } from '@lib/config/theme/theme.models';

export const THEMES: Record<string, ThemeConfigModel> = {
  dark: darkThemeConfig,
  light: lightThemeConfig,
};
