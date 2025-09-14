import { type THEME_SIZE, type THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import {
  type FONT_ALIGN,
  type FONT_FAMILY,
  type FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export type FontStylerParamsModel = {
  align?: FONT_ALIGN;
  family?: FONT_FAMILY;
  fontSize?: THEME_SIZE | THEME_SIZE_MORE | number;
  fontStyle?: FONT_STYLE;
  isBold?: boolean;
  isLineHeight?: boolean;
  isUnderline?: boolean;
};
