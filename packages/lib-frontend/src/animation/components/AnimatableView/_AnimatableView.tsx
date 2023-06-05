import type { _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import type { AnimatableViewRefModel } from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';
import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { _viewParams } from '@lib/frontend/core/components/View/_View';
import { _viewParams as _viewParamsPressable } from '@lib/frontend/core/components/View/_View.pressable';
import { _viewParams as _viewParamsScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { MotiProps } from 'moti';
import { MotiScrollView, MotiView } from 'moti';
import type { ComponentType, RefObject } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { Pressable } from 'react-native';

const PressableAnimatable = animatable({ Component: Pressable as ComponentType });

export const _AnimatableView: RSFCModel<AnimatableViewRefModel, _AnimatableViewPropsModel> =
  forwardRef(({ animation, children, elementState, testID, ...props }, ref) => {
    const theme = useTheme();
    const { styles } = useStyles({ props });

    const { animationProps, animationState, isRender, to, toState } = useAnimationState({
      animation,
      elementState,
      onElementStateChange: props.onElementStateChange,
      ref,
      testID,
    });

    useImperativeHandle(ref, () => ({
      scrollTo: (position) =>
        (ref as RefObject<AnimatableViewRefModel>).current?.scrollTo(position),
      to,
      toState,
    }));

    const Component =
      props.onPress || props.onPressIn || props.onPressOut
        ? (PressableAnimatable as ComponentType)
        : props.isHorizontalScrollable || props.isVerticalScrollable || props.onScroll
        ? MotiScrollView
        : MotiView;

    return isRender ? (
      <Component
        {...(_viewParams.getProps && _viewParams.getProps({ ...props, style: styles }, theme))}
        {...(_viewParamsPressable.getProps &&
          _viewParamsPressable.getProps({ ...props, style: styles }, theme))}
        {...(_viewParamsScrollable.getProps &&
          _viewParamsScrollable.getProps({ ...props, style: styles }, theme))}
        {...(animationProps as MotiProps['animate'])}
        hitSlop={undefined}
        ref={ref}
        state={animationState}
        style={styles}
        testID={testID}>
        {children}
      </Component>
    ) : null;
  });
