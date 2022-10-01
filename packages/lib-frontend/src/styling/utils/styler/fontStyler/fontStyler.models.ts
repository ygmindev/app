import type { FONT_ALIGN } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.constants';
import type { ThemeSizeModel } from '@lib/frontend/styling/utils/theme/theme.models';

export type FontAlignModel = `${FONT_ALIGN}`;

export interface FontStylerParamsModel {
  align?: FontAlignModel;
  isBold?: boolean;
  isCapitalize?: boolean;
  isLineHeight?: boolean;
  isStylish?: boolean;
  isSubtitle?: boolean;
  isTitle?: boolean;
  isUppercase?: boolean;
  size?: ThemeSizeModel;
}
