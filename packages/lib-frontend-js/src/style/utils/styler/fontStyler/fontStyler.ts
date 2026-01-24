import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import {
  FONT_FAMILY,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type FontStylerParamsModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import isNumber from 'lodash/isNumber';

export const fontStyler: StylerModel<FontStylerParamsModel, TextStyleModel> = (
  { align, family = FONT_FAMILY.MAIN, fontSize, fontStyle, isBold, isLineHeight, isUnderline },
  theme,
) => ({
  fontFamily:
    fontStyle === FONT_STYLE.HEADLINE
      ? theme.font.fontFamily[FONT_FAMILY.STYLISH]
      : theme.font.fontFamily[family],

  fontSize: isNumber(fontSize)
    ? fontSize
    : theme.font.size[
        fontSize ??
          (fontStyle === FONT_STYLE.HEADLINE ||
          fontStyle === FONT_STYLE.TITLE ||
          fontStyle === FONT_STYLE.SUBTITLE
            ? THEME_SIZE.LARGE
            : THEME_SIZE.MEDIUM)
      ],

  fontWeight:
    isBold || fontStyle === FONT_STYLE.HEADLINE || fontStyle === FONT_STYLE.TITLE
      ? theme.font.weight.bold
      : undefined,

  lineHeight: isLineHeight && !fontStyle ? theme.font.lineHeight : undefined,

  textAlign: align,

  textDecorationLine: isUnderline ? 'underline' : undefined,
});
