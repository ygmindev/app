import isNumber from 'lodash/isNumber';

import type { UseThemeModel } from '#lib-frontend/style/hooks/useTheme/useTheme.models';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import type { ThemeSizeModel } from '#lib-frontend/style/style.models';
import type {
  SpacingModel,
  SpacingStylerParamsModel,
} from '#lib-frontend/style/utils/styler/spacingStyler/spacingStyler.models';
import type { StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

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
    marginBottom: mVerticalF || getSpacing(mBottom, theme),
    marginLeft: mHorizontalF || getSpacing(mLeft, theme),
    marginRight: mHorizontalF || getSpacing(mRight, theme),
    marginTop: mVerticalF || getSpacing(mTop, theme),
    paddingBottom: pVerticalF || getSpacing(pBottom, theme),
    paddingLeft: pHorizontalF || getSpacing(pLeft, theme),
    paddingRight: pHorizontalF || getSpacing(pRight, theme),
    paddingTop: pVerticalF || getSpacing(pTop, theme),
  });
};
