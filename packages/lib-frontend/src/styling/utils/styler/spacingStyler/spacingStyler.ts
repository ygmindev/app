import { lightThemeConfig } from '@lib/config/theme/light.config';
import type { ThemeConfigModel } from '@lib/config/theme/theme.models';
import type {
  SpacingModel,
  SpacingStylerParamsModel,
} from '@lib/frontend/styling/utils/styler/spacingStyler/spacingStyler.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { isNumber } from 'lodash';

const _getSpacing = (
  value: SpacingModel | 'auto' | number | undefined,
  theme: ThemeConfigModel,
): 'auto' | number | undefined =>
  value === undefined || value === 'auto' || isNumber(value)
    ? value
    : value === false
    ? undefined
    : theme.shape.spacing[value === true ? 'm' : value] || undefined;

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
  context,
) => {
  const theme = context?.theme || lightThemeConfig;
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
