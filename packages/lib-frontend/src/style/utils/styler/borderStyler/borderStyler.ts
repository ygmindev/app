import { THEME_ROLE } from '@lib/frontend/style/style.constants';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import type { BorderStylerParamsModel } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const borderStyler: StylerModel<BorderStylerParamsModel> = (
  { border, borderColor, borderRole = THEME_ROLE.MAIN, borderWidth = 1, isShadow, round },
  theme,
) => {
  const _color = theme.colors[borderColor as ThemeColorModel];
  const _borderColor = _color ? _color[borderRole] : borderColor;
  return cleanObject({
    borderBottomWidth: border === BORDER_DIRECTION.BOTTOM ? borderWidth : undefined,
    borderColor: _borderColor,
    borderLeftWidth: border === BORDER_DIRECTION.LEFT ? borderWidth : undefined,
    borderRadius: round === true ? theme.shape.borderRadius : round === false ? undefined : round,
    borderRightWidth: border === BORDER_DIRECTION.RIGHT ? borderWidth : undefined,
    borderStyle: border ? 'solid' : undefined,
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
