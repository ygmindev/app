import { themeLightConfig } from '@lib/config/style/theme/configs/theme.light';
import type { BackgroundStylerParamsModel } from '@lib/frontend/style/utils/styler/backgroundStyler/backgroundStyler.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { THEME_SHADE } from '@lib/frontend/style/style.constants';
import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/style.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { get } from 'lodash';

export const backgroundStyler: StylerModel<BackgroundStylerParamsModel> = (
  { backgroundColor, backgroundShade = THEME_SHADE.MAIN },
  context,
) => {
  const theme = context?.theme || themeLightConfig;
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
