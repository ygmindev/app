import {
  type THEME_COLOR,
  type THEME_COLOR_MORE,
  type THEME_ROLE,
  type THEME_SIZE,
  type THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { type FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type TextStyle } from 'react-native';

export type ThemeConfigModel = {
  animation: {
    effect: number;

    isInitial: boolean;

    transition: number;
  };

  color: {
    border: string;

    isDark?: boolean;

    palette: Record<THEME_COLOR | THEME_COLOR_MORE, Record<THEME_ROLE, string>>;
  };

  font: {
    fontFamily: Record<FONT_FAMILY, string>;

    lineHeight: number;

    size: Record<THEME_SIZE | THEME_SIZE_MORE, number>;

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

      width: number;
    };

    height: Record<THEME_SIZE, number>;

    scrollBar: {
      thickness: number;
    };

    width: Record<THEME_SIZE, number>;
  };

  notification: {
    duration: number;

    width: number;
  };

  opaque: Record<THEME_SIZE, number>;

  shape: {
    borderRadius: Record<THEME_SIZE | THEME_SIZE_MORE, number>;

    height: Record<THEME_SIZE | THEME_SIZE_MORE, number>;

    scaling: Record<THEME_SIZE, number>;

    shadow: {
      elevation: number;

      opacity: number;

      size: number;
    };

    size: Record<THEME_SIZE | THEME_SIZE_MORE, number>;

    spacing: Record<THEME_SIZE, number>;

    width: Record<THEME_SIZE | THEME_SIZE_MORE, number>;
  };
};
