import { _Loading } from '@lib/frontend/core/components/Loading/_Loading';
import { type _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import { type LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

export const Loading = composeComponent<LoadingPropsModel, _LoadingPropsModel>({
  Component: _Loading,

  getProps: (
    { color = THEME_COLOR.PRIMARY, colorRole = THEME_ROLE.MAIN, size = THEME_SIZE.MEDIUM },
    theme,
  ) => ({
    color: isString(color) ? color : theme.color.palette[color as THEME_COLOR][colorRole],
    size: isNumber(size) ? size : theme.font.size[size],
  }),
});

process.env.APP_IS_DEBUG && (Loading.displayName = variableName({ Loading }));
