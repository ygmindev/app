import type {
  THEME_BASIC_SIZE,
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type ViewStyleModel = ViewStyle;
export type TextStyleModel = TextStyle;
export type ImageStyleModel = ImageStyle;
export type StyleModel = ViewStyleModel | TextStyleModel | ImageStyleModel;

export type ThemeBasicSizeModel = `${THEME_BASIC_SIZE}`;

export type ThemeColorModel = `${THEME_COLOR}`;

export type ThemeRoleModel = `${THEME_ROLE}`;

export type ThemeSizeModel = `${THEME_SIZE}`;

export interface StylePropsModel<TType extends StyleModel = ViewStyleModel> {
  style?: TType | Array<TType> | null;
}
