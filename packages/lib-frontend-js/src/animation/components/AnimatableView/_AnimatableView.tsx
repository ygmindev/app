import { type _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import { type AnimatableViewRefModel } from '@lib/frontend/animation/components/AnimatableView/AnimatableView.models';
import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { getViewParams as getViewParamsBase } from '@lib/frontend/core/components/View/_View';
import { getViewParams as getViewParamsPressable } from '@lib/frontend/core/components/View/_View.pressable';
import { type RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type MotiProps } from 'moti';
import { MotiScrollView, MotiView } from 'moti';
import { type ComponentType, type RefObject } from 'react';
import { useImperativeHandle } from 'react';
import { Pressable } from 'react-native';

const PressableAnimatable = animatable({ Component: Pressable as ComponentType });

const viewParamsBase = getViewParamsBase();
const viewParamsPressable = getViewParamsPressable();

export const _AnimatableView: RSFCModel<AnimatableViewRefModel, _AnimatableViewPropsModel> = ({
  animation,
  children,
  elementState,
  ref,
  testID,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });

  const { animationProps, animationState, to, toState } = useAnimationState({
    animation,
    elementState,
    onElementStateChange: props.onElementStateChange,
    ref,
    testID,
  });

  useImperativeHandle(ref, () => ({
    scrollTo: (position) =>
      (ref as RefObject<AnimatableViewRefModel>).current?.scrollTo({
        ...position,
        animated: false,
      }),
    to,
    toState,
  }));

  const Component =
    props.onPress || props.onPressIn || props.onPressOut
      ? (PressableAnimatable as ComponentType)
      : props.isHorizontalScrollable || props.isVerticalScrollable || props.onScroll
        ? MotiScrollView
        : MotiView;

  return (
    <Component
      {...viewParamsBase.getProps?.({ ...props, style: styles }, theme)}
      {...viewParamsPressable.getProps?.({ ...props, style: styles }, theme)}
      {...(animationProps as Omit<MotiProps['animate'], 'pointerEvents'>)}
      hitSlop={undefined}
      ref={ref}
      state={animationState}
      style={styles}
      testID={testID}>
      {children}
    </Component>
  );
};
