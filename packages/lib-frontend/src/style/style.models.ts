import { type ThemeConfigModel } from '@lib/config/style/theme/theme.models';
import {
  type STYLE_BRIGHTNESS,
  type THEME_COLOR,
  type THEME_COLOR_MORE,
  type THEME_ROLE,
  type THEME_SIZE,
  type THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { type ImageStyle, type TextStyle, type ViewStyle } from 'react-native';

export type ViewStyleModel = ViewStyle;

export type TextStyleModel = TextStyle;

export type ImageStyleModel = ImageStyle;

export type StyleModel = ViewStyleModel | TextStyleModel | ImageStyleModel;

export type ThemeSizeModel = `${THEME_SIZE}`;

export type ThemeColorModel = `${THEME_COLOR}`;

export type ThemeColorMoreModel = `${THEME_COLOR_MORE}`;

export type ThemeRoleModel = `${THEME_ROLE}`;

export type ThemeSizeMoreModel = `${THEME_SIZE_MORE}`;

export type StylePropsModel<TType extends StyleModel = ViewStyleModel> = {
  style?: TType | Array<TType> | null;
};

export type BrightnessModel = `${STYLE_BRIGHTNESS}`;

export type ThemeModel = ThemeConfigModel;

export type ThemeColorPropsModel = {
  color?: ThemeColorModel;
};

export type ThemePresetsModel = {
  shapePrimaryMainStyle?: ViewStyleModel;

  textMainStyle?: TextStyleModel;
};
