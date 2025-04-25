import { type _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import { type AnimatableTextRefModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { useAnimationState } from '@lib/frontend/animation/hooks/useAnimationState/useAnimationState';
import { _textParams } from '@lib/frontend/core/components/Text/_Text';
import { type PropsModel, type RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { MotiText } from 'moti';
import { useImperativeHandle } from 'react';

export const _AnimatableText: RSFCModel<AnimatableTextRefModel, _AnimatableTextPropsModel> = ({
  animation,
  elementState,
  ref,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const { animationProps, animationState, to, toState } = useAnimationState({
    animation,
    elementState,
    onElementStateChange: props.onElementStateChange,
    ref,
    testID: props.testID,
  });

  useImperativeHandle(ref, () => ({ to, toState }));

  return (
    <MotiText
      {...(_textParams.getProps ? _textParams.getProps({ ...props, style: styles }, theme) : {})}
      {...(animationProps as PropsModel<typeof MotiText>)}
      ref={ref}
      state={animationState}
      style={styles}
    />
  );
};
