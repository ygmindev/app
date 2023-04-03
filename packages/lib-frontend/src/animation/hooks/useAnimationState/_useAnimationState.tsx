import type {
  _UseAnimationStateModel,
  _UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { DynamicStyleProp, MotiTranformProps, UseDynamicAnimationState } from 'moti';
import { useDynamicAnimation } from 'moti';
import { useImperativeHandle, useState } from 'react';

export const _useAnimationState = <TStyle extends StyleModel = ViewStyleModel>({
  animation,
  elementState = ELEMENT_STATE.INACTIVE,
  ref = null,
}: _UseAnimationStateParamsModel<TStyle>): _UseAnimationStateModel<TStyle> => {
  const { delay, duration, isInfinite, isInitial = false, isLazy = true, states } = animation || {};
  const [current, currentSet] = useState<TStyle | undefined>(
    states ? states[elementState] : undefined,
  );

  const animationState = useDynamicAnimation();

  useImperativeHandle(ref, () => ({
    to: (params) => {
      animationState.animateTo(params as DynamicStyleProp<MotiTranformProps>);
      currentSet(params as TStyle);
    },
    toState: (params) => {
      states &&
        states[params] &&
        animationState.animateTo(states[params] as DynamicStyleProp<MotiTranformProps>);
      currentSet(states ? (states[params] as TStyle) : undefined);
    },
  }));

  return {
    animationProps: {
      animate: ref ? undefined : states && (states[elementState] as never),
      animateInitialState: isInitial,
      exit: states?.exit || states?.inactive,
      from: ref ? states && (states[elementState] as never) : (states?.inactive as never),
      transition: {
        delay,
        duration,
        loop: isInfinite,
        type: 'timing',
      },
    },
    animationState: animationState as UseDynamicAnimationState,
    current,
    isRender: elementState !== ELEMENT_STATE.EXIT || !isLazy,
  };
};
