import { _useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState';
import {
  type UseAnimationStateModel,
  type UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export const useAnimationState = <TStyle extends StyleModel = ViewStyleModel>({
  animation,
  ...props
}: UseAnimationStateParamsModel<TStyle>): UseAnimationStateModel<TStyle> => {
  const theme = useTheme();
  return _useAnimationState<TStyle>({
    ...props,
    animation: {
      ...animation,
      duration: animation?.duration ?? theme.animation.effect,
    },
  });
};
