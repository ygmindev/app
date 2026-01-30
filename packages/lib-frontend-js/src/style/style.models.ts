import { type ThemeConfigModel } from '@lib/config/theme/theme.models';
import { type THEME_COLOR } from '@lib/frontend/style/style.constants';
import {
  type ImageStyle,
  type RotateTransform,
  type RotateXTransform,
  type RotateYTransform,
  type RotateZTransform,
  type ScaleTransform,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

export type ViewStyleModel = ViewStyle &
  Partial<
    RotateTransform & RotateXTransform & RotateYTransform & RotateZTransform & ScaleTransform
  >;

export type TextStyleModel = TextStyle &
  Partial<
    RotateTransform & RotateXTransform & RotateYTransform & RotateZTransform & ScaleTransform
  >;

export type ImageStyleModel = ImageStyle;

export type StyleModel = ViewStyleModel | TextStyleModel | ImageStyleModel;

export type StylePropsModel<TType extends StyleModel = ViewStyleModel> = {
  style?: TType | Array<TType> | null;
};

export type ThemeModel = ThemeConfigModel;

export type ThemeColorPropsModel = {
  color?: THEME_COLOR;
};

export type ThemePresetsModel = {
  shapePrimaryMainStyle?: ViewStyleModel;

  shapeSecondaryMainStyle?: ViewStyleModel;

  textMainStyle?: TextStyleModel;
};
