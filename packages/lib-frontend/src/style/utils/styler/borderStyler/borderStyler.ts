import { lightConfig } from '@lib/config/style/theme/configs/light';
import {
  BORDER_DIRECTION,
  BORDER_SHADOW,
} from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import type { BorderStylerParamsModel } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { THEME_SHADE } from '@lib/frontend/style/utils/theme/theme.constants';
import type {
  ThemeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/utils/theme/theme.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const borderStyler: StylerModel<BorderStylerParamsModel> = (
  { border, borderColor, borderShade = THEME_SHADE.MAIN, borderWidth = 1, isShadow, round },
  context,
) => {
  const theme = context?.theme || lightConfig;
  return cleanObject({
    borderBottomWidth: border === BORDER_DIRECTION.BOTTOM ? borderWidth : undefined,
    borderColor: border
      ? borderColor
        ? theme.colors[borderColor as ThemeColorModel][borderShade as ThemeShadeModel] ||
          borderColor
        : theme.colors.border
      : undefined,
    borderLeftWidth: border === BORDER_DIRECTION.LEFT ? borderWidth : undefined,
    borderRadius: round === true ? theme.shape.borderRadius : round === false ? undefined : round,
    borderRightWidth: border === BORDER_DIRECTION.RIGHT ? borderWidth : undefined,
    borderStyle: border ? 'solid' : undefined,
    borderTopWidth: border === BORDER_DIRECTION.TOP ? borderWidth : undefined,
    borderWidth: border === true ? borderWidth : undefined,
    ...(isShadow ? BORDER_SHADOW : {}),
  });
};
