import { lightThemeConfig } from '@lib/config/theme/light.config';
import type { FontStylerParamsModel } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
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
    size = THEME_SIZE.MEDIUM,
  },
  context,
) => {
  const theme = context?.theme || lightThemeConfig;
  return cleanObject({
    fontFamily: isStylish ? theme.font.stylish : theme.font.family,

    fontSize: theme.font.size[isTitle || isSubtitle ? THEME_SIZE.LARGE : size],

    fontWeight: isBold || isTitle ? theme.font.boldWeight : undefined,

    lineHeight: isLineHeight ? theme.font.lineHeight : undefined,

    textAlign: align,

    textTransform: isUppercase ? 'uppercase' : isCapitalize ? 'capitalize' : undefined,
  });
};
