import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';

import { THEME_COLOR, THEME_ROLE } from '#lib-frontend/style/style.constants';
import type { ThemeColorModel } from '#lib-frontend/style/style.models';
import {
  BORDER_DIRECTION,
  BORDER_RADIUS_DIRECTION,
} from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';
import type {
  BorderRadiusDirection,
  BorderStylerParamsModel,
} from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.models';
import type { StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const borderStyler: StylerModel<BorderStylerParamsModel> = (
  {
    border,
    borderColor = THEME_COLOR.NEUTRAL,
    borderRole = THEME_ROLE.MUTED,
    borderWidth = 1,
    isShadow,
    round,
  },
  theme,
) => {
  const getBorderRadius = (value?: typeof round, key?: BorderRadiusDirection): number | undefined =>
    value === true
      ? theme.shape.borderRadius
      : isNumber(value)
      ? value
      : value && isPlainObject(value) && key
      ? getBorderRadius(value[key])
      : undefined;

  const color = theme.colors.tone[borderColor as ThemeColorModel];
  const borderColorF = color ? color[borderRole] : borderColor;
  return cleanObject({
    borderBottomLeftRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.BOTTOM_LEFT),
    borderBottomRightRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.BOTTOM_RIGHT),
    borderBottomWidth: border === BORDER_DIRECTION.BOTTOM ? borderWidth : undefined,
    borderColor: border ? borderColorF : undefined,
    borderLeftWidth: border === BORDER_DIRECTION.LEFT ? borderWidth : undefined,
    borderRadius: getBorderRadius(round),
    borderRightWidth: border === BORDER_DIRECTION.RIGHT ? borderWidth : undefined,
    borderStyle: border ? 'solid' : undefined,
    borderTopLeftRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.TOP_LEFT),
    borderTopRightRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.TOP_RIGHT),
    borderTopWidth: border === BORDER_DIRECTION.TOP ? borderWidth : undefined,
    borderWidth: border === true ? borderWidth : undefined,
    ...(isShadow
      ? {
          elevation: 1,
          shadowColor: '#000',
          shadowOffset: { height: 1, width: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
        }
      : {}),
  });
};
