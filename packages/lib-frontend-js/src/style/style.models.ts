import { type ThemeConfigModel } from '@lib/config/theme/theme.models';
import { type THEME_COLOR, type THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { type ImageStyle, type TextStyle, type ViewStyle } from 'react-native';

export type ViewStyleModel = ViewStyle;

export type TextStyleModel = TextStyle;

export type ImageStyleModel = ImageStyle;

export type StyleModel = ViewStyleModel | TextStyleModel | ImageStyleModel;

export type StylePropsModel<TType extends StyleModel = ViewStyleModel> = {
  style?: TType | Array<TType> | null;
};

export type ThemeModel = ThemeConfigModel;

export type ThemeColorPropsModel = {
  color?: THEME_COLOR | THEME_COLOR_MORE;
};

export type ThemePresetsModel = {
  shapePrimaryMainStyle?: ViewStyleModel;

  textMainStyle?: TextStyleModel;
};
