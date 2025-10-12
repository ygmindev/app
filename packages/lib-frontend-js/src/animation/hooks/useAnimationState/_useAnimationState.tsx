import { THEME_ANIMATION } from '@lib/config/theme/theme.constants';
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
  defaultState,
  elementState,
  onElementStateChange,
  ref,
}: _UseAnimationStateParamsModel<TStyle>): _UseAnimationStateModel<TStyle> => {
  const {
    delay,
    duration,
    isInfinite,
    isInitial = THEME_ANIMATION.isInitial,
    states,
  } = animation ?? {};
  const animationState = useDynamicAnimation();
  const defaultStateF = defaultState ?? (isInitial ? ELEMENT_STATE.INACTIVE : ELEMENT_STATE.ACTIVE);
  const currentState = elementState ?? defaultStateF;
  const elementStateF = states?.[currentState] as never;
  return {
    animationProps: {
      animate: isInfinite
        ? (states?.[ELEMENT_STATE.ACTIVE] as never)
        : ref?.current
          ? undefined
          : states && elementStateF,
      animateInitialState: isInitial,
      exit: states?.[ELEMENT_STATE.EXIT],
      from: isInfinite
        ? (states?.[defaultStateF] as never)
        : ref?.current
          ? states && elementStateF
          : (states?.[defaultStateF] as never),
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
      if (states?.[params]) {
        animationState.animateTo(states[params] as DynamicStyleProp<MotiTranformProps>);
        onElementStateChange?.(params);
      }
    },
  };
};
