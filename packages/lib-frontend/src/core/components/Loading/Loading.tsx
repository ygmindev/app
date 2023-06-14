import { animatable } from '#lib-frontend/animation/utils/animatable/animatable';
import { _Loading } from '#lib-frontend/core/components/Loading/_Loading';
import type { _LoadingPropsModel } from '#lib-frontend/core/components/Loading/_Loading.models';
import type { LoadingPropsModel } from '#lib-frontend/core/components/Loading/Loading.models';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import type { TextStyleModel, ThemeColorModel } from '#lib-frontend/style/style.models';
import isNumber from 'lodash/isNumber';

const AnimatableLoading = animatable<_LoadingPropsModel, TextStyleModel>({ Component: _Loading });

export const Loading: SFCModel<LoadingPropsModel> = ({
  animation,
  color = THEME_COLOR.PRIMARY,
  colorRole = THEME_ROLE.MAIN,
  fontSize = THEME_SIZE_MORE.LARGE,
}) => {
  const theme = useTheme();
  const colorF = theme.colors.tone[color as ThemeColorModel];
  return (
    <AnimatableLoading
      animation={animation}
      color={colorF ? colorF[colorRole] : color}
      size={isNumber(fontSize) ? fontSize : theme.font.size[fontSize]}
    />
  );
};
