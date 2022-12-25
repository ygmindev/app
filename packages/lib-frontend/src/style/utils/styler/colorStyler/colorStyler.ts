import { themeLightConfig } from '@lib/config/style/theme/configs/theme.light';
import type { ColorStylerParamsModel } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { THEME_RELATIVE_COLOR, THEME_SHADE } from '@lib/frontend/style/style.constants';
import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/style.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const colorStyler: StylerModel<ColorStylerParamsModel> = (
  { color = THEME_RELATIVE_COLOR.MAIN, shade = THEME_SHADE.MAIN },
  context,
) => {
  const theme = context?.theme || themeLightConfig;
  return cleanObject({
    color:
      theme.colors.text[color as ThemeRelativeColorModel] ||
      theme.colors[color as ThemeColorModel][shade as ThemeShadeModel] ||
      color,
  });
};
