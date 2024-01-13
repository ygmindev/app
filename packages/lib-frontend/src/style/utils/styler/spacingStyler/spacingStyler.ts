import isNumber from 'lodash/isNumber';

import { type UseThemeModel } from '@lib-frontend/style/hooks/useTheme/useTheme.models';
import { THEME_SIZE } from '@lib-frontend/style/style.constants';
import { type ThemeSizeModel } from '@lib-frontend/style/style.models';
import {
  type SpacingModel,
  type SpacingStylerParamsModel,
} from '@lib-frontend/style/utils/styler/spacingStyler/spacingStyler.models';
import { type StylerModel } from '@lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib-shared/core/utils/cleanObject/cleanObject';

export const getSpacing = (
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
  const mF = getSpacing(m, theme);
  const mHorizontalF = mF || getSpacing(mHorizontal, theme);
  const mVerticalF = mF || getSpacing(mVertical, theme);
  const pF = getSpacing(p, theme);
  const pHorizontalF = pF || getSpacing(pHorizontal, theme);
  const pVerticalF = pF || getSpacing(pVertical, theme);
  return cleanObject({
    margin: mF,
    marginBottom: getSpacing(mBottom, theme) ?? mVerticalF,
    marginLeft: getSpacing(mLeft, theme) ?? mHorizontalF,
    marginRight: getSpacing(mRight, theme) ?? mHorizontalF,
    marginTop: getSpacing(mTop, theme) ?? mVerticalF,
    paddingBottom: getSpacing(pBottom, theme) ?? pVerticalF,
    paddingLeft: getSpacing(pLeft, theme) ?? pHorizontalF,
    paddingRight: getSpacing(pRight, theme) ?? pHorizontalF,
    paddingTop: getSpacing(pTop, theme) ?? pVerticalF,
  });
};
