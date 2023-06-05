import type {
  _UseAnimationStateModel,
  _UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { DynamicStyleProp, MotiTranformProps, UseDynamicAnimationState } from 'moti';
import { useDynamicAnimation } from 'moti';
import { useState } from 'react';

export const _useAnimationState = <TStyle extends StyleModel = ViewStyleModel>({
  animation,
  elementState = ELEMENT_STATE.INACTIVE,
  onElementStateChange,
  ref = null,
  testID,
}: _UseAnimationStateParamsModel<TStyle>): _UseAnimationStateModel<TStyle> => {
  const {
    delay,
    duration,
    isInfinite,
    isInitial = false,
    isLazy = false,
    states,
  } = animation || {};
  const [current, currentSet] = useState<TStyle | undefined>(
    states ? states[elementState] : undefined,
  );
  const [isAnimating, isAnimatingSet] = useState<boolean>(false);

  const theme = useTheme();
  useChange(elementState, () => {
    if (testID === 'xxx') {
      isAnimatingSet(true);
      // sleep({ duration }).then(() => isAnimatingSet(false));
      console.warn(theme.animation.transition);
      setTimeout(() => isAnimatingSet(false), theme.animation.transition);
    }
  });

  const animationState = useDynamicAnimation();
  return {
    animationProps: {
      animate: ref ? undefined : states && (states[elementState] as never),
      animateInitialState: isInitial,
      exit: states?.exit || states?.inactive,
      from: ref ? states && (states[elementState] as never) : (states?.inactive as never),
      transition: { delay, duration, loop: isInfinite, type: 'timing' },
    },
    animationState: animationState as UseDynamicAnimationState,
    current,
    isRender: elementState !== ELEMENT_STATE.EXIT || !isLazy || isAnimating,
    to: (params) => {
      animationState.animateTo(params as DynamicStyleProp<MotiTranformProps>);
      currentSet(params as TStyle);
    },
    toState: (params) => {
      if (states && states[params]) {
        animationState.animateTo(states[params] as DynamicStyleProp<MotiTranformProps>);
        onElementStateChange && onElementStateChange(params);
      }
      currentSet(states ? (states[params] as TStyle) : undefined);
    },
  };
};
