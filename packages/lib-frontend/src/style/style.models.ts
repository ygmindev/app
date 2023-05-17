import type { ThemeConfigModel } from '@lib/config/style/theme/_theme.models';
import type {
  STYLE_BRIGHTNESS,
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type ViewStyleModel = ViewStyle;

export type TextStyleModel = TextStyle;

export type ImageStyleModel = ImageStyle;

export type StyleModel = ViewStyleModel | TextStyleModel | ImageStyleModel;

export type ThemeSizeModel = `${THEME_SIZE}`;

export type ThemeColorModel = `${THEME_COLOR}`;

export type ThemeRoleModel = `${THEME_ROLE}`;

export type ThemeSizeMoreModel = `${THEME_SIZE_MORE}`;

export interface StylePropsModel<TType extends StyleModel = ViewStyleModel> {
  style?: TType | Array<TType> | null;
}

export type BrightnessModel = `${STYLE_BRIGHTNESS}`;

export interface ThemeModel extends Omit<ThemeConfigModel, 'colors'> {
  colors: Pick<ThemeConfigModel['colors'], 'activeLightness' | 'disabledOpacity'> & {
    tone: Record<ThemeColorModel, Record<ThemeRoleModel, string>>;
  };
}
