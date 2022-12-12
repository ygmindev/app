import { themeDarkConfig } from '@lib/config/style/theme/configs/theme.dark';
import { themeLightConfig } from '@lib/config/style/theme/configs/theme.light';
import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';

export const THEMES: Record<string, ThemeConfigParamsModel> = {
  dark: themeDarkConfig,
  light: themeLightConfig,
};
