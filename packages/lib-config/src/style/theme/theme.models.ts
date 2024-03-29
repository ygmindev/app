import { type TextStyle } from 'react-native';
import { type MD3Theme } from 'react-native-paper';

import {
  type ThemeColorModel,
  type ThemeColorMoreModel,
  type ThemeRoleModel,
  type ThemeSizeModel,
  type ThemeSizeMoreModel,
} from '@lib/frontend/style/style.models';
import { type FontFamilyModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';

export type ThemeConfigModel = {
  animation: {
    effect: number;

    transition: number;
  };

  color: {
    border: string;

    isDark?: boolean;

    palette: Record<ThemeColorModel | ThemeColorMoreModel, Record<ThemeRoleModel, string>>;
  };

  font: {
    fontFamily: Record<FontFamilyModel, string>;

    lineHeight: number;

    size: Record<ThemeSizeModel | ThemeSizeMoreModel, number>;

    weight: {
      bold: TextStyle['fontWeight'];

      main: TextStyle['fontWeight'];
    };
  };

  layout: {
    dropdown: {
      maxHeight: number;
    };

    header: {
      height: number;
    };

    height: Record<ThemeSizeModel, number>;

    navigation: {
      width: number;
    };

    scrollBar: {
      thickness: number;
    };

    width: Record<ThemeSizeModel, number>;
  };

  notification: {
    duration: number;

    width: number;
  };

  opaque: Record<ThemeSizeModel, number>;

  shape: {
    borderRadius: Record<ThemeSizeModel, number>;

    shadow: {
      elevation: number;

      opacity: number;

      size: number;
    };

    size: Record<ThemeSizeModel | ThemeSizeMoreModel, number>;

    spacing: Record<ThemeSizeModel, number>;
  };
};

export type _ThemeConfigModel = MD3Theme;
