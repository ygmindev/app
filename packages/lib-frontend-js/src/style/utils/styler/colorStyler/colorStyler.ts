import {
  type THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
} from '@lib/frontend/style/style.constants';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { type ColorStylerParamsModel } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';

export const colorStyler: StylerModel<ColorStylerParamsModel, TextStyleModel> = (
  { color, colorRole },
  theme,
) => {
  let colorF = color ?? THEME_COLOR_MORE.SURFACE;
  const isSurface = (colorF as THEME_COLOR | THEME_COLOR_MORE) === THEME_COLOR_MORE.SURFACE;
  const palette = theme.color.palette[colorF as THEME_COLOR | THEME_COLOR_MORE];
  colorF = palette
    ? palette[colorRole ?? (isSurface ? THEME_ROLE.CONTRAST : THEME_ROLE.MAIN)]
    : colorF;
  return { color: colorF };
};
