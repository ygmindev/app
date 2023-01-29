import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import type {
  _AnimatableModel,
  _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { PropsModel } from '@lib/frontend/core/core.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import { motify } from 'moti';
import { createElement, forwardRef } from 'react';

export const _animatable = <TProps, TStyle extends StyleModel = ViewStyleModel>({
  Component,
}: _AnimatableParamsModel<TProps, TStyle>): _AnimatableModel<TProps, TStyle> => {
  const _Component = motify(Component)();
  const _Animatable = forwardRef<AnimatableRefModel, PropsModel<_AnimatableModel<TProps, TStyle>>>(
    ({ animation, elementState, ...props }, ref) => {
      const { animationProps, animationState } = useAnimationState({
        animation,
        elementState,
        ref,
      });
      return createElement(_Component, {
        ...animationProps,
        ...props,
        ref,
        state: animationState,
      } as unknown as PropsModel<typeof _Component>);
    },
  );
  return _Animatable as _AnimatableModel<TProps, TStyle>;
};
