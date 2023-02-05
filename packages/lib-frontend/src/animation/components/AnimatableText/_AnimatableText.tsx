import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import type { _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import { _textParams } from '@lib/frontend/core/components/Text/_Text';
import type { PropsModel, RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { MotiText } from 'moti';
import { forwardRef } from 'react';

export const _AnimatableText: RSFCModel<AnimatableRefModel, _AnimatableTextPropsModel> = forwardRef(
  ({ animation, children, elementState, ...props }, ref) => {
    const theme = useTheme();
    const { styles } = useStyles({ props });
    const { animationProps, animationState, isRender } = useAnimationState({
      animation,
      elementState,
      ref,
    });
    return isRender ? (
      <MotiText
        {...(_textParams.getProps ? _textParams.getProps(props, theme) : {})}
        {...(animationProps as PropsModel<typeof MotiText>)}
        ref={ref}
        state={animationState}
        style={styles}>
        {children}
      </MotiText>
    ) : null;
  },
);
