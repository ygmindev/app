import { lightThemeConfig } from '@lib/config/theme/light.config';
import { FONT_BOLD_WEIGHT } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.constants';
import type { FontStylerParamsModel } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const fontStyler: StylerModel<FontStylerParamsModel> = (
  {
    align,
    isBold,
    isCapitalize,
    isLineHeight,
    isStylish,
    isSubtitle,
    isTitle,
    isUppercase,
    size = 'm',
  },
  context,
) => {
  const theme = context?.theme || lightThemeConfig;
  return cleanObject({
    fontFamily: isStylish ? theme.font.stylish : theme.font.family,

    fontSize: theme.font.size[isTitle || isSubtitle ? 'l' : size],

    fontWeight: isBold || isTitle ? `${FONT_BOLD_WEIGHT}` : undefined,

    lineHeight: isLineHeight ? theme.font.lineHeight : undefined,

    textAlign: align,

    textTransform: isUppercase ? 'uppercase' : isCapitalize ? 'capitalize' : undefined,
  });
};
