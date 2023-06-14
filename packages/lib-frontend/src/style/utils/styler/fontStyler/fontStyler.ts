import isNumber from 'lodash/isNumber';

import { THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import type { TextStyleModel } from '#lib-frontend/style/style.models';
import {
  FONT_FAMILY,
  FONT_TYPE,
} from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type { FontStylerParamsModel } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.models';
import type { StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const fontStyler: StylerModel<FontStylerParamsModel, TextStyleModel> = (
  {
    align,
    casing,
    family = FONT_FAMILY.MAIN,
    fontSize = THEME_SIZE_MORE.MEDIUM,
    isBold,
    isLineHeight,
    type = FONT_TYPE.BODY,
  },
  theme,
) =>
  cleanObject({
    fontFamily:
      type === FONT_TYPE.HEADLINE ? theme.font.fontFamily.stylish : theme.font.fontFamily[family],

    fontSize: isNumber(fontSize)
      ? fontSize
      : theme.font.size[
          type === FONT_TYPE.HEADLINE
            ? THEME_SIZE_MORE.XLARGE
            : type === FONT_TYPE.TITLE || type === FONT_TYPE.SUBTITLE
            ? THEME_SIZE_MORE.LARGE
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

    textTransform: casing,
  });
