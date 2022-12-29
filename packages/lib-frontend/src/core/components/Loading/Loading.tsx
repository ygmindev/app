import { _Loading } from '@lib/frontend/core/components/Loading/_Loading';
import type { _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import type { LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';

export const Loading = composeComponent<LoadingPropsModel, _LoadingPropsModel>({
  getComponent: () => _Loading,

  getProps: ({ color = THEME_COLOR.PRIMARY, size = THEME_SIZE.MEDIUM }, theme) => ({
    color: theme.colors.tone[color].main,
    size: theme.font.size[size],
  }),
});
