import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { ANIMATIONS } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type {
  UseAnimationModel,
  UseAnimationParamsModel,
} from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useState } from 'react';

export const useAnimation = ({
  duration,
  from,
  isLazy = true,
  isVisible,
  measure,
  to,
  types,
}: UseAnimationParamsModel): UseAnimationModel => {
  const theme = useTheme();
  const _duration = duration || theme.animation.duration;
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const isMounted = useMount(
    {
      onMount: () =>
        isVisible
          ? setIsAnimating(true)
          : sleep({ duration: _duration }).then(() => isMounted && setIsAnimating(false)),
    },
    [_duration, isVisible],
  );
  const _animationProps = types
    ? types.reduce((result, type) => merge({ values: [result, ANIMATIONS[type](measure)] }), {
        from,
        to,
      } as AnimationModel)
    : { from, to };
  const _animation: AnimationModel = {
    duration: duration || theme.animation.duration,
    ..._animationProps,
    from: isVisible ? _animationProps.from : _animationProps.to,
    to: isVisible ? _animationProps.to : _animationProps.from,
  };
  return { animation: _animation, isAnimating, isRender: !isLazy || isAnimating || isVisible };
};
