import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import type { _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { _viewParams } from '@lib/frontend/core/components/View/_View';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { MotiScrollView, MotiView } from 'moti';
import type { ComponentType } from 'react';
import { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';

const _TouchableOpacityAnimatable = animatable({ Component: TouchableOpacity as ComponentType });

export const _AnimatableView: RSFCModel<AnimatableRefModel, _AnimatableViewPropsModel> = forwardRef(
  ({ animation, children, elementState, ...props }, ref) => {
    const theme = useTheme();
    const { styles } = useStyles({ props });
    const { animationProps, animationState } = useAnimationState({ animation, elementState, ref });

    const _Component =
      props.onPress || props.onPressIn || props.onPressOut
        ? (_TouchableOpacityAnimatable as ComponentType)
        : props.isHorizontalScrollable || props.isVerticalScrollable || props.onScroll
        ? MotiScrollView
        : MotiView;

    return (
      <_Component
        state={animationState}
        style={styles}
        {...(_viewParams.getProps ? _viewParams.getProps(props, theme) : {})}
        {...animationProps}>
        {children}
      </_Component>
    );
  },
);
