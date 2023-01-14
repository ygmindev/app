import { _Loading } from '@lib/frontend/core/components/Loading/_Loading';
import type { _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import type { LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';

export const Loading = composeComponent<LoadingPropsModel, _LoadingPropsModel>({
  getComponent: () => _Loading,

  getProps: ({ color = THEME_COLOR.PRIMARY, size = THEME_SIZE.LARGE }, theme) => {
    const _color = theme.colors.tone[color as ThemeColorModel];
    return {
      color: _color ? _color.main : color,
      size: theme.font.size[size],
    };
  },
});
