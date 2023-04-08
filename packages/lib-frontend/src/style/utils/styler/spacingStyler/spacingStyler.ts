import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { ThemeSizeModel } from '@lib/frontend/style/style.models';
import type {
  SpacingModel,
  SpacingStylerParamsModel,
} from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import isNumber from 'lodash/isNumber';

const _getSpacing = (
  value: SpacingModel | 'auto' | number | undefined,
  theme: UseThemeModel,
): 'auto' | number | undefined =>
  value === undefined || value === 'auto' || isNumber(value)
    ? value
    : theme.shape.spacing[value === true ? THEME_SIZE.MEDIUM : (value as ThemeSizeModel)];

export const spacingStyler: StylerModel<SpacingStylerParamsModel> = (
  {
    m,
    mBottom,
    mHorizontal,
    mLeft,
    mRight,
    mTop,
    mVertical,
    p,
    pBottom,
    pHorizontal,
    pLeft,
    pRight,
    pTop,
    pVertical,
  },
  theme,
) => {
  const _m = _getSpacing(m, theme);
  const _mHorizontal = _m || _getSpacing(mHorizontal, theme);
  const _mVertical = _m || _getSpacing(mVertical, theme);
  const _p = _getSpacing(p, theme);
  const _pHorizontal = _p || _getSpacing(pHorizontal, theme);
  const _pVertical = _p || _getSpacing(pVertical, theme);
  return cleanObject({
    margin: _m,
    marginBottom: _mVertical || _getSpacing(mBottom, theme),
    marginLeft: _mHorizontal || _getSpacing(mLeft, theme),
    marginRight: _mHorizontal || _getSpacing(mRight, theme),
    marginTop: _mVertical || _getSpacing(mTop, theme),
    paddingBottom: _pVertical || _getSpacing(pBottom, theme),
    paddingLeft: _pHorizontal || _getSpacing(pLeft, theme),
    paddingRight: _pHorizontal || _getSpacing(pRight, theme),
    paddingTop: _pVertical || _getSpacing(pTop, theme),
  });
};
