import { lightThemeConfig } from '@lib/config/theme/light.config';
import type { BackgroundStylerParamsModel } from '@lib/frontend/styling/utils/styler/backgroundStyler/backgroundStyler.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import { THEME_SHADE } from '@lib/frontend/styling/utils/theme/theme.constants';
import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/styling/utils/theme/theme.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { get } from 'lodash';

export const backgroundStyler: StylerModel<BackgroundStylerParamsModel> = (
  { backgroundColor, backgroundShade = THEME_SHADE.MAIN },
  context,
) => {
  const theme = context?.theme || lightThemeConfig;
  return backgroundColor
    ? cleanObject({
        backgroundColor:
          theme.colors.background[backgroundColor as ThemeRelativeColorModel] ||
          get(theme.colors, [
            backgroundColor as ThemeColorModel,
            backgroundShade as ThemeShadeModel,
          ]) ||
          backgroundColor,
      })
    : {};
};
