import { type ThemeSizeModel, type ThemeSizeMoreModel } from '@lib/frontend/style/style.models';
import {
  type FONT_ALIGN,
  type FONT_FAMILY,
  type FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export type FontAlignModel = `${FONT_ALIGN}`;

export type FontFamilyModel = `${FONT_FAMILY}`;

export type FontStyleModel = `${FONT_STYLE}`;

export type FontStylerParamsModel = {
  align?: FontAlignModel;
  family?: FontFamilyModel;
  fontSize?: ThemeSizeModel | ThemeSizeMoreModel | number;
  fontStyle?: FontStyleModel;
  isBold?: boolean;
  isLineHeight?: boolean;
};
