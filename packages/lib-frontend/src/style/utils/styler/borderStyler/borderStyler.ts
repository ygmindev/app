import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';

import { DIRECTION } from '#lib-frontend/core/core.constants';
import { THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type ThemeColorModel, type ThemeSizeModel } from '#lib-frontend/style/style.models';
import { BORDER_RADIUS_DIRECTION } from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';
import {
  type BorderRadiusDirection,
  type BorderStylerParamsModel,
} from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.models';
import { type StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const borderStyler: StylerModel<BorderStylerParamsModel> = (
  { border, borderColor, borderRole = THEME_ROLE.MAIN, borderWidth = 1, isShadow, round },
  theme,
) => {
  const getBorderRadius = (value?: typeof round, key?: BorderRadiusDirection): number | undefined =>
    theme.shape.borderRadius[value as unknown as ThemeSizeModel] ||
    (value === true
      ? theme.shape.borderRadius[THEME_SIZE.MEDIUM]
      : isNumber(value)
      ? value
      : value && isPlainObject(value) && key
      ? getBorderRadius(value[key as keyof typeof value])
      : undefined);

  const colorF = theme.color.palette[borderColor as ThemeColorModel];
  const borderColorF = colorF ? colorF[borderRole] : theme.color.border;
  return cleanObject({
    borderBottomLeftRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.BOTTOM_LEFT),
    borderBottomRightRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.BOTTOM_RIGHT),
    borderBottomWidth: border === DIRECTION.BOTTOM ? borderWidth : undefined,
    borderColor: border ? borderColorF : undefined,
    borderLeftWidth: border === DIRECTION.LEFT ? borderWidth : undefined,
    borderRadius: getBorderRadius(round),
    borderRightWidth: border === DIRECTION.RIGHT ? borderWidth : undefined,
    borderStyle: border ? 'solid' : undefined,
    borderTopLeftRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.TOP_LEFT),
    borderTopRightRadius: getBorderRadius(round, BORDER_RADIUS_DIRECTION.TOP_RIGHT),
    borderTopWidth: border === DIRECTION.TOP ? borderWidth : undefined,
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
