import isNumber from 'lodash/isNumber';

import { _Loading } from '@lib/frontend/core/components/Loading/_Loading';
import { type _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import { type LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type ThemeColorModel } from '@lib/frontend/style/style.models';

export const Loading = composeComponent<LoadingPropsModel, _LoadingPropsModel>({
  Component: _Loading,

  getProps: (
    { color = THEME_COLOR.PRIMARY, colorRole = THEME_ROLE.MAIN, size = THEME_SIZE.MEDIUM },
    theme,
  ) => ({
    color: theme.color.palette[color as ThemeColorModel][colorRole],
    size: isNumber(size) ? size : theme.font.size[size],
  }),
});
