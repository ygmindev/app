import type { _AnimatableComponentPropsModel } from '@lib/frontend/animation/components/Animatable/_Animatable.models';
import type { AnimatablePropsModel } from '@lib/frontend/animation/components/Animatable/Animatable.models';
import type { _AnimatableParamsModel } from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import { motify } from 'moti';
import type { ComponentType } from 'react';
import { createElement } from 'react';

export const _animatable = <TProps extends { style?: StyleModel }>({
  Component,
}: _AnimatableParamsModel<TProps>): SFCModel<AnimatablePropsModel> => {
  const _Component: SFCModel<AnimatablePropsModel> = ({
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
      motify(Component) as unknown as ComponentType<_AnimatableComponentPropsModel>,
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
