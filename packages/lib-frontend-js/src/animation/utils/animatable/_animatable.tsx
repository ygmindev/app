import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import {
  type _AnimatableModel,
  type _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import { type PropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { motify } from 'moti';
import { createElement, useImperativeHandle } from 'react';

export const _animatable = <TProps, TStyle extends StyleModel = ViewStyleModel>({
  Component,
}: _AnimatableParamsModel<TProps, TStyle>): _AnimatableModel<TProps, TStyle> => {
  const ComponentF = motify(Component)();
  const Animatable: _AnimatableModel<TProps, TStyle> = ({
    animation,
    elementState,
    ref,
    ...props
  }) => {
    const { styles } = useStyles({ props });
    const { animationProps, animationState, to, toState } = useAnimationState({
      animation,
      elementState,
      onElementStateChange: props.onElementStateChange,
      ref,
      testID: props.testID,
    });
    useImperativeHandle(ref, () => ({ to, toState }));

    return createElement(ComponentF, {
      ...animationProps,
      ...props,
      ref,
      state: animationState,
      style: styles,
    } as unknown as PropsModel<typeof ComponentF>);
  };
  return Animatable;
};
