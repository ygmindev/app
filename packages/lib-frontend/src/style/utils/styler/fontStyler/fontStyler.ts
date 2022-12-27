import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FONT_FAMILY,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type { FontStylerParamsModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const fontStyler: StylerModel<FontStylerParamsModel> = (
  {
    align,
    isBold,
    isCapitalize,
    isLineHeight,
    isUppercase,
    fontSize = THEME_SIZE.MEDIUM,
    fontStyle = FONT_STYLE.BODY,
    family = FONT_FAMILY.MAIN,
  },
  theme,
) =>
  cleanObject({
    fontFamily:
      family === FONT_FAMILY.STYLISH || fontStyle === FONT_STYLE.HEADLINE
        ? theme.font.fontFamily.stylish
        : theme.font.fontFamily.main,

    fontSize:
      theme.font.size[
        fontStyle === FONT_STYLE.HEADLINE
          ? THEME_SIZE.XLARGE
          : fontStyle === FONT_STYLE.TITLE || fontStyle === FONT_STYLE.SUBTITLE
          ? THEME_SIZE.LARGE
          : fontSize
      ],

    fontWeight:
      isBold || fontStyle === FONT_STYLE.HEADLINE || fontStyle === FONT_STYLE.TITLE
        ? theme.font.weightBold
        : undefined,

    lineHeight:
      isLineHeight || fontStyle === FONT_STYLE.HEADLINE || fontStyle === FONT_STYLE.TITLE
        ? theme.font.lineHeight
        : undefined,

    textAlign: align,

    textTransform: isUppercase
      ? 'uppercase'
      : isCapitalize || fontStyle === FONT_STYLE.TITLE
      ? 'capitalize'
      : undefined,
  });
