import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import {
  FONT_ALIGN,
  FONT_FAMILY,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type FontStylerParamsModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import isNumber from 'lodash/isNumber';

export const fontStyler: StylerModel<FontStylerParamsModel, TextStyleModel> = (
  {
    align,
    family = FONT_FAMILY.MAIN,
    fontSize = THEME_SIZE.MEDIUM,
    fontStyle = FONT_STYLE.BODY,
    isBold,
    isLineHeight,
  },
  theme,
) =>
  cleanObject({
    fontFamily:
      fontStyle === FONT_STYLE.HEADLINE
        ? theme.font.fontFamily.stylish
        : theme.font.fontFamily[family],

    fontSize: isNumber(fontSize)
      ? fontSize
      : theme.font.size[
          fontStyle === FONT_STYLE.HEADLINE ||
          fontStyle === FONT_STYLE.TITLE ||
          fontStyle === FONT_STYLE.SUBTITLE
            ? THEME_SIZE.LARGE
            : fontSize
        ],

    fontWeight:
      isBold || fontStyle === FONT_STYLE.HEADLINE || fontStyle === FONT_STYLE.TITLE
        ? theme.font.weight.bold
        : undefined,

    lineHeight: isLineHeight && fontStyle === FONT_STYLE.BODY ? theme.font.lineHeight : undefined,

    textAlign: align ?? (fontStyle === FONT_STYLE.HEADLINE ? FONT_ALIGN.CENTER : undefined),
  });
