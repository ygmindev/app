import {
  type _UseAnimationStateModel,
  type _UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import {
  type DynamicStyleProp,
  type MotiTranformProps,
  type MotiTransition,
  type UseDynamicAnimationState,
} from 'moti';
import { useDynamicAnimation } from 'moti';
import { ReduceMotion } from 'react-native-reanimated';

export const _useAnimationState = <TStyle extends StyleModel = ViewStyleModel>({
  animation,
  elementState = ELEMENT_STATE.INACTIVE,
  onElementStateChange,
  ref,
}: _UseAnimationStateParamsModel<TStyle>): _UseAnimationStateModel<TStyle> => {
  const { delay, duration, isInfinite, isInitial, states } = animation ?? {};
  const animationState = useDynamicAnimation();
  const elementStateF = states && elementState ? (states[elementState] as never) : undefined;
  return {
    animationProps: {
      animate: ref?.current ? undefined : states && elementStateF,
      animateInitialState: isInitial,
      exit: states?.exit,
      from: ref?.current ? states && elementStateF : (states?.inactive as never),
      transition: {
        delay,
        duration,
        easing: (n) => n,
        loop: isInfinite,
        reduceMotion: ReduceMotion.Never,
        type: 'timing',
      } as MotiTransition,
    },
    animationState: animationState as UseDynamicAnimationState,
    to: (params) => {
      animationState.animateTo(params as DynamicStyleProp<MotiTranformProps>);
    },
    toState: (params) => {
      if (states && states[params]) {
        animationState.animateTo(states[params] as DynamicStyleProp<MotiTranformProps>);
        onElementStateChange && onElementStateChange(params);
      }
    },
  };
};
