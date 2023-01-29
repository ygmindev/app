import type {
  _UseAnimationStateModel,
  _UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { ElementStateModel } from '@lib/frontend/core/core.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { Variants } from 'moti';
import { useAnimationState } from 'moti';
import { useImperativeHandle, useState } from 'react';

export const _useAnimationState = <TStyle extends StyleModel = ViewStyleModel>({
  animation,
  elementState = ELEMENT_STATE.INACTIVE,
  ref = null,
}: _UseAnimationStateParamsModel<TStyle>): _UseAnimationStateModel<TStyle> => {
  const {
    delay,
    duration,
    isInfinite,
    isInitial = false,
    isLazy = false,
    states,
  } = animation || {};

  const animationState = useAnimationState((states || {}) as Variants<TStyle>);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const _animate = debounce({
    callback: async (params: ElementStateModel): Promise<void> => {
      if (!isAnimating && states && states[elementState]) {
        setIsAnimating(true);
        animationState.transitionTo(params as keyof TStyle);
        await sleep({ duration: duration });
        setIsAnimating(false);
      }
    },
    isLeading: true,
  });

  useImperativeHandle(ref, () => ({ to: _animate }));

  return {
    animationProps: {
      animate: ref ? undefined : states && (states[elementState] as never),
      animateInitialState: isInitial,
      exit: states?.invisible || states?.inactive,
      from: isInitial ? (states?.inactive as never) : undefined,
      onDidAnimate: () => (ref ? setIsAnimating(false) : undefined),
      transition: {
        delay: delay,
        duration: duration,
        loop: isInfinite,
        type: 'timing',
      },
    },
    animationState,
    isAnimating,
    isRender: !isLazy || isAnimating || elementState !== ELEMENT_STATE.INVISIBLE,
  };
};
