import { darkConfig } from '@lib/config/style/theme/configs/dark';
import { lightConfig } from '@lib/config/style/theme/configs/light';
import type { ThemeConfigModel } from '@lib/config/style/theme/theme.models';

export const THEMES: Record<string, ThemeConfigModel> = {
  dark: darkConfig,
  light: lightConfig,
};
