import type { ThemeConfigModel } from '@lib/config/style/theme/theme.models';
import type {
  THEME_BASIC_SIZE,
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
  THEME_SHADE,
  THEME_SIZE,
} from '@lib/frontend/style/utils/theme/theme.constants';

export type ThemeColorModel = `${THEME_COLOR}`;

export type ThemeRelativeColorModel = `${THEME_RELATIVE_COLOR}`;

export type ThemeShadeModel = `${THEME_SHADE}`;

export type ThemeBasicSizeModel = `${THEME_BASIC_SIZE}`;

export type ThemeSizeModel = `${THEME_SIZE}`;

export interface ThemeContextModel {
  isMobile?: boolean;
  theme?: ThemeConfigModel;
}
