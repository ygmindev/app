import type {
  _UseAnimationStateModel,
  _UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import type { DynamicStyleProp } from 'moti';
import { useDynamicAnimation } from 'moti';
import { useImperativeHandle } from 'react';

export const _useAnimationState = <TStyle extends StyleModel = ViewStyleModel>({
  animation,
  elementState = ELEMENT_STATE.INACTIVE,
  ref = null,
}: _UseAnimationStateParamsModel<TStyle>): _UseAnimationStateModel<TStyle> => {
  const { delay, duration, isInfinite, isInitial = true, isLazy = true, states } = animation || {};

  const animationState = useDynamicAnimation();

  useImperativeHandle(ref, () => ({
    to: debounce({
      callback: async (params) => animationState.animateTo(params as DynamicStyleProp),
      isLeading: true,
    }),
    toState: debounce({
      callback: async (params) => {
        states && states[params] && animationState.animateTo(states[params] as DynamicStyleProp);
      },
      isLeading: true,
    }),
  }));

  return {
    animationProps: {
      animate: ref ? undefined : states && (states[elementState] as never),
      animateInitialState: isInitial,
      exit: states?.invisible || states?.inactive,
      from: states?.inactive as never,
      transition: {
        delay,
        duration,
        loop: isInfinite,
        type: 'timing',
      },
    },
    animationState,
    isRender: elementState !== ELEMENT_STATE.INVISIBLE || !isLazy,
  };
};
