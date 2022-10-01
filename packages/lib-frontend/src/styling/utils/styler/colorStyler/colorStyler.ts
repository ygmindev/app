import { lightThemeConfig } from '@lib/config/theme/light.config';
import type { ColorStylerParamsModel } from '@lib/frontend/styling/utils/styler/colorStyler/colorStyler.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import {
  THEME_RELATIVE_COLOR,
  THEME_SHADE,
} from '@lib/frontend/styling/utils/theme/theme.constants';
import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/styling/utils/theme/theme.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const colorStyler: StylerModel<ColorStylerParamsModel> = (
  { color = THEME_RELATIVE_COLOR.MAIN, shade = THEME_SHADE.MAIN },
  context,
) => {
  const theme = context?.theme || lightThemeConfig;
  return cleanObject({
    color:
      theme.colors.text[color as ThemeRelativeColorModel] ||
      theme.colors[color as ThemeColorModel][shade as ThemeShadeModel] ||
      color,
  });
};
