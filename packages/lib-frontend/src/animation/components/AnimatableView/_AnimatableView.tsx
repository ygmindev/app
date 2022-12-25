import type { _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { View } from '@lib/frontend/core/components/View/View';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { MotiProps } from 'moti';
import { MotiScrollView, MotiView } from 'moti';
import type { ComponentType } from 'react';
import { createElement } from 'react';
import { TouchableOpacity } from 'react-native';

const _TouchableOpacityAnimatable = animatable({ Component: TouchableOpacity });

export const _AnimatableView: FCModel<_AnimatableViewPropsModel> = ({
  children,
  delay,
  duration,
  from,
  isHorizontalScrollable,
  isInfinite,
  isVerticalScrollable,
  onEnd,
  onPress,
  onPressIn,
  onPressOut,
  to,
  ...props
}) => {
  let _Component: ComponentType;
  const _props: MotiProps = {
    ...props,
    animate: to,
    from,
    onDidAnimate: onEnd,
    transition: { delay, duration, type: 'timing' },
  } as MotiProps;

  if (onPress || onPressIn || onPressOut) {
    _Component = _TouchableOpacityAnimatable;
  } else if (isHorizontalScrollable || isVerticalScrollable) {
    _Component = MotiScrollView;
  } else {
    _Component = MotiView;
  }

  return createElement(View, { ..._props, Component: _Component }, children);
};
