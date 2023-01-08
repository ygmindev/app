import type { _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { getAnimatableProps } from '@lib/frontend/animation/utils/getAnimatableProps/getAnimatableProps';
import { _viewParams } from '@lib/frontend/core/components/View/_View';
import type { PropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { MotiScrollView, MotiView } from 'moti';
import type { ComponentType } from 'react';
import { TouchableOpacity } from 'react-native';

const _TouchableOpacityAnimatable = animatable({ Component: TouchableOpacity as ComponentType });

export const _AnimatableView = composeComponent<
  _AnimatableViewPropsModel,
  PropsModel<typeof MotiView>
>({
  ..._viewParams,

  getComponent: ({
    isHorizontalScrollable,
    isVerticalScrollable,
    onPress,
    onPressIn,
    onPressOut,
    onScroll,
  }) =>
    onPress || onPressIn || onPressOut
      ? (_TouchableOpacityAnimatable as ComponentType)
      : isHorizontalScrollable || isVerticalScrollable || onScroll
      ? MotiScrollView
      : MotiView,

  getProps: ({ animation, ...props }, theme) =>
    ({
      ...(_viewParams.getProps ? _viewParams.getProps(props, theme) : {}),
      ...(animation ? getAnimatableProps(animation, theme) : {}),
    } as PropsModel<typeof MotiView>),
});
