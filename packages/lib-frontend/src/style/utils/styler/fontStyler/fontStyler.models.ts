import type { ThemeSizeModel } from '@lib/frontend/style/style.models';
import type {
  FONT_ALIGN,
  FONT_FAMILY,
  FONT_TYPE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export type FontAlignModel = `${FONT_ALIGN}`;

export type FontFamilyModel = `${FONT_FAMILY}`;

export type FontTypeModel = `${FONT_TYPE}`;

export interface FontStylerParamsModel {
  align?: FontAlignModel;
  family?: FontFamilyModel;
  fontSize?: ThemeSizeModel;
  isBold?: boolean;
  isCapitalize?: boolean;
  isLineHeight?: boolean;
  isUppercase?: boolean;
  type?: FontTypeModel;
}
