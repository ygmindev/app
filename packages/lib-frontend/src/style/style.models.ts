import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import type {
  THEME_BASIC_SIZE,
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type StyleModel = ViewStyle & TextStyle & ImageStyle;

export type ThemeBasicSizeModel = `${THEME_BASIC_SIZE}`;

export type ThemeColorModel = `${THEME_COLOR}`;

export type ThemeRoleModel = `${THEME_ROLE}`;

export type ThemeSizeModel = `${THEME_SIZE}`;

export interface ThemeContextModel {
  isMobile?: boolean;
  theme?: ThemeConfigParamsModel;
}
