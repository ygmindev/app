import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import {
  FONT_FAMILY,
  FONT_TYPE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type { FontStylerParamsModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const fontStyler: StylerModel<FontStylerParamsModel, TextStyleModel> = (
  {
    align,
    isBold,
    isCapitalize,
    isLineHeight,
    isUppercase,
    fontSize = THEME_SIZE.MEDIUM,
    type = FONT_TYPE.BODY,
    family = FONT_FAMILY.MAIN,
  },
  theme,
) =>
  cleanObject({
    fontFamily:
      type === FONT_TYPE.HEADLINE ? theme.font.fontFamily.stylish : theme.font.fontFamily[family],

    fontSize:
      theme.font.size[
        type === FONT_TYPE.HEADLINE
          ? THEME_SIZE.XLARGE
          : type === FONT_TYPE.TITLE || type === FONT_TYPE.SUBTITLE
          ? THEME_SIZE.LARGE
          : fontSize
      ],

    fontWeight:
      isBold || type === FONT_TYPE.HEADLINE || type === FONT_TYPE.TITLE
        ? theme.font.weightBold
        : undefined,

    lineHeight:
      isLineHeight || type === FONT_TYPE.HEADLINE || type === FONT_TYPE.TITLE
        ? theme.font.lineHeight
        : undefined,

    textAlign: align,

    textTransform: isUppercase
      ? 'uppercase'
      : isCapitalize || type === FONT_TYPE.TITLE
      ? 'capitalize'
      : undefined,
  });
