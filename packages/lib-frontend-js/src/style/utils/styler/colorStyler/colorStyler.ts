import { THEME_COLOR_MORE, THEME_ROLE } from '@lib/frontend/style/style.constants';
import {
  type TextStyleModel,
  type ThemeColorModel,
  type ThemeColorMoreModel,
} from '@lib/frontend/style/style.models';
import { type ColorStylerParamsModel } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const colorStyler: StylerModel<ColorStylerParamsModel, TextStyleModel> = (
  { color, colorRole },
  theme,
) => {
  let colorF = color ?? THEME_COLOR_MORE.SURFACE;
  const isSurface = (colorF as ThemeColorModel | ThemeColorMoreModel) === THEME_COLOR_MORE.SURFACE;
  const palette = theme.color.palette[colorF as ThemeColorModel | ThemeColorMoreModel];
  colorF = palette
    ? palette[colorRole ?? (isSurface ? THEME_ROLE.CONTRAST : THEME_ROLE.MAIN)]
    : colorF;
  return cleanObject({ color: colorF });
};
