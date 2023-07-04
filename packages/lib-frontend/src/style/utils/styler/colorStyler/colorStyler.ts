import { THEME_ROLE } from '#lib-frontend/style/style.constants';
import { type TextStyleModel, type ThemeColorModel } from '#lib-frontend/style/style.models';
import { type ColorStylerParamsModel } from '#lib-frontend/style/utils/styler/colorStyler/colorStyler.models';
import { type StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const colorStyler: StylerModel<ColorStylerParamsModel, TextStyleModel> = (
  { color, colorRole = THEME_ROLE.MAIN },
  theme,
) => {
  const colorF = theme.color.palette[color as ThemeColorModel];
  return cleanObject({ color: colorF ? colorF[colorRole] : color });
};
