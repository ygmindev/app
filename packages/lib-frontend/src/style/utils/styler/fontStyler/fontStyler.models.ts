import { type ThemeSizeMoreModel } from '#lib-frontend/style/style.models';
import {
  type FONT_ALIGN,
  type FONT_FAMILY,
  type FONT_TYPE,
} from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export type FontAlignModel = `${FONT_ALIGN}`;

export type FontFamilyModel = `${FONT_FAMILY}`;

export type FontTypeModel = `${FONT_TYPE}`;

export type FontStylerParamsModel = {
  align?: FontAlignModel;
  family?: FontFamilyModel;
  fontSize?: ThemeSizeMoreModel | number;
  isBold?: boolean;
  isLineHeight?: boolean;
  type?: FontTypeModel;
};
