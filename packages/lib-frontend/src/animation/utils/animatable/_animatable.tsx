import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import type {
  _AnimatableModel,
  _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { PropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import { motify } from 'moti';
import { createElement, forwardRef, useImperativeHandle } from 'react';

export const _animatable = <TProps, TStyle extends StyleModel = ViewStyleModel>({
  Component,
}: _AnimatableParamsModel<TProps, TStyle>): _AnimatableModel<TProps, TStyle> => {
  const _Component = motify(Component)();
  const _Animatable = forwardRef<
    AnimatableRefModel<TStyle>,
    PropsModel<_AnimatableModel<TProps, TStyle>>
  >(({ animation, elementState, ...props }, ref) => {
    const { styles } = useStyles({ props });
    const { animationProps, animationState, isRender, to, toState } = useAnimationState({
      animation,
      elementState,
    });
    useImperativeHandle(ref, () => ({ to, toState }));
    return isRender
      ? createElement(_Component, {
          ...animationProps,
          ...props,
          ref,
          state: animationState,
          style: styles,
        } as unknown as PropsModel<typeof _Component>)
      : null;
  });
  return _Animatable as _AnimatableModel<TProps, TStyle>;
};
