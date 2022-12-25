import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { _AnimatableComponentPropsModel } from '@lib/frontend/animation/components/Animatable/_Animatable.models';
import type { _AnimatableParamsModel } from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { motify } from 'moti';
import type { ComponentType } from 'react';
import { createElement } from 'react';

export const _animatable = <TProps,>({
  Component,
}: _AnimatableParamsModel<TProps>): FCModel<TProps & AnimatablePropsModel> => {
  const _Component: FCModel<TProps & AnimatablePropsModel> = ({
    delay,
    duration,
    from,
    isInfinite,
    onEnd,
    style,
    testID,
    to,
  }) =>
    createElement(
      motify(
        Component as ComponentType<TProps & AnimatablePropsModel>,
      ) as unknown as ComponentType<_AnimatableComponentPropsModel>,
      {
        animate: to,
        from,
        onDidAnimate: onEnd,
        style,
        testID,
        transition: { delay, duration, type: 'timing' },
      } as _AnimatableComponentPropsModel,
    );

  return _Component;
};
