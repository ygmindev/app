import { type TextStyle } from 'react-native';
import { type MD3Theme } from 'react-native-paper';

import {
  type BrightnessModel,
  type ThemeColorModel,
  type ThemeRoleModel,
  type ThemeShadeModel,
  type ThemeSizeModel,
  type ThemeSizeMoreModel,
} from '#lib-frontend/style/style.models';
import { type FontFamilyModel } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.models';

export type ThemeConfigModel = {
  animation: {
    duration: number;

    transition: number;
  };

  brightness?: BrightnessModel;

  color: {
    border: string;

    isDark?: boolean;

    palette: Record<
      ThemeColorModel | 'surface',
      Record<ThemeShadeModel, Record<ThemeRoleModel, string>>
    >;
  };

  font: {
    fontFamily: Record<FontFamilyModel, string>;

    lineHeight: number;

    size: Record<ThemeSizeMoreModel, number>;

    weight: {
      bold: TextStyle['fontWeight'];

      main: TextStyle['fontWeight'];
    };
  };

  layout: {
    header: {
      height: number;
    };

    height: Record<ThemeSizeModel, number>;

    width: Record<ThemeSizeModel, number>;
  };

  notification: {
    duration: number;

    width: number;
  };

  shape: {
    borderRadius: number;

    height: Record<ThemeSizeMoreModel, number>;

    spacing: Record<ThemeSizeModel, number>;
  };
};

export type _ThemeConfigModel = MD3Theme;
