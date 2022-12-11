import type { AnimatablePropsModel } from '@lib/frontend/animation/components/Animatable/Animatable.models';
import { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type {
  UseAnimationModel,
  UseAnimationParamsModel,
} from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useState } from 'react';

export const useAnimation = ({
  duration,
  from,
  isScalable,
  isVisible,
  width,
  isLazy = true,
  to,
  type = ANIMATION_TYPE.APPEAR,
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

  let _animation: AnimatablePropsModel = { duration: duration || theme.animation.duration };
  switch (type) {
    case ANIMATION_TYPE.APPEAR: {
      _animation = isVisible
        ? {
            ..._animation,
            from: { opacity: 0, transform: isScalable ? [{ scale: 0.9 }] : undefined },
            to: { opacity: 1, transform: isScalable ? [{ scale: 1.0 }] : undefined },
          }
        : {
            ..._animation,
            from: { opacity: 1, transform: isScalable ? [{ scale: 1.0 }] : undefined },
            to: { opacity: 0, transform: isScalable ? [{ scale: 0.9 }] : undefined },
          };
      break;
    }
    case ANIMATION_TYPE.SLIDE: {
      _animation = width
        ? isVisible
          ? { ..._animation, from: { left: width }, to: { left: 0 } }
          : { ..._animation, from: { left: 0 }, to: { left: -width } }
        : _animation;
      break;
    }
    default: {
      _animation = { ..._animation, from: from || {}, to: to || {} };
      break;
    }
  }

  return { animation: _animation, isAnimating, isRender: !isLazy || isAnimating || isVisible };
};
