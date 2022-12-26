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
    size = THEME_SIZE.MEDIUM,
    style = FONT_STYLE.BODY,
    family = FONT_FAMILY.MAIN,
  },
  theme,
) =>
  cleanObject({
    fontFamily:
      family === FONT_FAMILY.STYLISH || style === FONT_STYLE.HEADLINE
        ? theme.font.fontFamily.stylish
        : theme.font.fontFamily.main,

    fontSize:
      theme.font.size[
        style === FONT_STYLE.HEADLINE
          ? THEME_SIZE.XLARGE
          : style === FONT_STYLE.TITLE || style === FONT_STYLE.SUBTITLE
          ? THEME_SIZE.LARGE
          : size
      ],

    fontWeight:
      isBold || style === FONT_STYLE.HEADLINE || style === FONT_STYLE.TITLE
        ? theme.font.weightBold
        : undefined,

    lineHeight:
      isLineHeight || style === FONT_STYLE.HEADLINE || style === FONT_STYLE.TITLE
        ? theme.font.lineHeight
        : undefined,

    textAlign: align,

    textTransform: isUppercase
      ? 'uppercase'
      : isCapitalize || style === FONT_STYLE.TITLE
      ? 'capitalize'
      : undefined,
  });
