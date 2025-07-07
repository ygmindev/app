import { CORNER, DIRECTION } from '@lib/frontend/core/core.constants';
import { type CornerModel } from '@lib/frontend/core/core.models';
import { THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type ThemeColorModel, type ThemeSizeModel } from '@lib/frontend/style/style.models';
import { BORDER_STYLE } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import { type BorderStylerParamsModel } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import isNumber from 'lodash/isNumber';
import isPlainObject from 'lodash/isPlainObject';

export const borderStyler: StylerModel<BorderStylerParamsModel> = (
  {
    border,
    borderColor,
    borderRole = THEME_ROLE.MAIN,
    borderStyle,
    borderWidth = 1,
    isShadow,
    round,
  },
  theme,
) => {
  const getBorderRadius = (value?: typeof round, key?: CornerModel): number | undefined =>
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
  const boderWidthF = borderWidth === true ? 2 : isNumber(borderWidth) ? borderWidth : 1;

  return {
    borderBottomLeftRadius: getBorderRadius(round, CORNER.BOTTOM_LEFT),
    borderBottomRightRadius: getBorderRadius(round, CORNER.BOTTOM_RIGHT),
    borderBottomWidth: border === DIRECTION.BOTTOM ? boderWidthF : undefined,
    borderColor: border ? borderColorF : undefined,
    borderLeftWidth: border === DIRECTION.LEFT ? boderWidthF : undefined,
    borderRadius: getBorderRadius(round),
    borderRightWidth: border === DIRECTION.RIGHT ? boderWidthF : undefined,
    borderStyle: border
      ? borderStyle === BORDER_STYLE.DASHED
        ? 'dashed'
        : borderStyle === BORDER_STYLE.DOTTED
          ? 'dotted'
          : 'solid'
      : undefined,
    borderTopLeftRadius: getBorderRadius(round, CORNER.TOP_LEFT),
    borderTopRightRadius: getBorderRadius(round, CORNER.TOP_RIGHT),
    borderTopWidth: border === DIRECTION.TOP ? boderWidthF : undefined,
    borderWidth: border === true ? boderWidthF : undefined,
    ...(isShadow
      ? {
          elevation: 1,
          shadowColor: '#000',
          shadowOffset: { height: theme.shape.shadow.elevation, width: 0 },
          shadowOpacity: theme.shape.shadow.opacity,
          shadowRadius: theme.shape.shadow.size,
        }
      : {}),
  };
};
