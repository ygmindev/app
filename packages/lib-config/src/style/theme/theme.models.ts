import { type TextStyle } from 'react-native';
import { type MD3Theme } from 'react-native-paper';

import {
  type ThemeColorMoreModel,
  type ThemeRoleModel,
  type ThemeSizeModel,
  type ThemeSizeMoreModel,
} from '#lib-frontend/style/style.models';
import { type FontFamilyModel } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.models';

export type ThemeConfigModel = {
  animation: {
    effect: number;

    transition: number;
  };

  color: {
    border: string;

    isDark?: boolean;

    palette: Record<ThemeColorMoreModel, Record<ThemeRoleModel, string>>;
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

    navigation: {
      width: number;
    };

    width: Record<ThemeSizeModel, number>;
  };

  notification: {
    duration: number;

    width: number;
  };

  opaque: number;

  shape: {
    borderRadius: number;

    height: Record<ThemeSizeMoreModel, number>;

    spacing: Record<ThemeSizeModel, number>;
  };
};

export type _ThemeConfigModel = MD3Theme;
