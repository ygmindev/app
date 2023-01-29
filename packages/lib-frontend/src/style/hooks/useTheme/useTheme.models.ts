import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import type { ThemeColorModel, ThemeRoleModel } from '@lib/frontend/style/style.models';

export interface UseThemeModel extends Omit<ThemeConfigParamsModel, 'colors'> {
  colors: Pick<ThemeConfigParamsModel['colors'], 'activeLightness' | 'disabledLightness'> & {
    tone: Record<ThemeColorModel, Record<ThemeRoleModel, string>>;
  };
  isDark: boolean;
}
