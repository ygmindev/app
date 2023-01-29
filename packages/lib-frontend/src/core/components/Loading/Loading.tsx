import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { _Loading } from '@lib/frontend/core/components/Loading/_Loading';
import type { _LoadingPropsModel } from '@lib/frontend/core/components/Loading/_Loading.models';
import type { LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { TextStyleModel, ThemeColorModel } from '@lib/frontend/style/style.models';

const _AnimatableLoading = animatable<_LoadingPropsModel, TextStyleModel>({ Component: _Loading });

export const Loading: SFCModel<LoadingPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  size = THEME_SIZE.LARGE,
  animation,
}) => {
  const theme = useTheme();
  const _color = theme.colors.tone[color as ThemeColorModel];
  return (
    <_AnimatableLoading
      animation={animation}
      color={_color ? _color.main : color}
      size={theme.font.size[size]}
    />
  );
};
