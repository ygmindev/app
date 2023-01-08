import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { ANIMATIONS } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type {
  UseAnimationModel,
  UseAnimationParamsModel,
} from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useState } from 'react';

export const useAnimation = <TStyle extends StyleModel = ViewStyleModel>({
  duration,
  from,
  isActive,
  isLazy = true,
  measure,
  to,
  types,
}: UseAnimationParamsModel<TStyle>): UseAnimationModel<TStyle> => {
  const theme = useTheme();
  const _duration = duration || theme.animation.duration;
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const isMounted = useMount({
    deps: [_duration, isActive],
    onMount: () =>
      isActive
        ? setIsAnimating(true)
        : sleep({ duration: _duration }).then(() => isMounted && setIsAnimating(false)),
  });
  const _animationProps = types
    ? types.reduce((result, type) => merge({ values: [result, ANIMATIONS[type](measure)] }), {
        from,
        isActive,
        to,
      } as AnimationModel<TStyle>)
    : { from, isActive, to };
  const _animation: AnimationModel<TStyle> = {
    ..._animationProps,
    duration: duration || theme.animation.duration,
  };
  return { animation: _animation, isAnimating, isRender: !isLazy || isAnimating || isActive };
};
