import { THEME_COLOR_MORE, THEME_ROLE } from '#lib-frontend/style/style.constants';
import {
  type TextStyleModel,
  type ThemeColorModel,
  type ThemeColorMoreModel,
} from '#lib-frontend/style/style.models';
import { type ColorStylerParamsModel } from '#lib-frontend/style/utils/styler/colorStyler/colorStyler.models';
import { type StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const colorStyler: StylerModel<ColorStylerParamsModel, TextStyleModel> = (
  { color, colorRole },
  theme,
) => {
  const colorF =
    theme.color.palette[
      (color ?? (colorRole ? THEME_COLOR_MORE.SURFACE : color)) as
        | ThemeColorModel
        | ThemeColorMoreModel
    ];
  return cleanObject({ color: colorF ? colorF[colorRole ?? THEME_ROLE.MAIN] : color });
};
