import { THEME_COLOR, THEME_ROLE } from '#lib-frontend/style/style.constants';
import { type TextStyleModel, type ThemeColorModel } from '#lib-frontend/style/style.models';
import { type ColorStylerParamsModel } from '#lib-frontend/style/utils/styler/colorStyler/colorStyler.models';
import { type StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const colorStyler: StylerModel<ColorStylerParamsModel, TextStyleModel> = (
  {
    color = THEME_COLOR.NEUTRAL,
    colorRole = color === THEME_COLOR.NEUTRAL ? THEME_ROLE.MAIN_CONTRAST : THEME_ROLE.BASE,
  },
  theme,
) => {
  const colorF = theme.colors.tone[color as ThemeColorModel];
  return cleanObject({ color: colorF ? colorF[colorRole] : color });
};
