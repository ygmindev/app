import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { textStyler } from '@lib/frontend/styling/utils/styler/textStyler/textStyler';
import { isFunction, isString } from 'lodash';
import type { TextStyle } from 'react-native';
import { Text as NativeText } from 'react-native';
import type { Easing } from 'react-native-animatable';
import { Text as TextWithAnimationProps } from 'react-native-animatable';

export const Text: SFCModel<TextPropsModel> = ({
  animation,
  children,
  isEllipsis,
  onPress,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props, stylers: [textStyler] });
  const translation = useTranslation();
  const theme = useTheme();

  const Component = animation ? TextWithAnimationProps : NativeText;
  const animationProps = animation
    ? {
        animation: animation.animation,
        delay: animation.delay,
        duration: animation.duration || theme.animation.duration,
        easing: 'ease-in-out' as Easing,
        onTransitionEnd: () => animation.onEnd && animation.onEnd(),
        onTransitionStart: () => animation.onStart && animation.onStart(),
        transition: animation.transition as Array<keyof TextStyle>,
      }
    : {};

  return (
    <Component
      ellipsizeMode={isEllipsis ? 'tail' : undefined}
      numberOfLines={isEllipsis ? 1 : undefined}
      onPress={onPress ? () => onPress() : undefined}
      style={styles}
      testID={testID}
      {...animationProps}>
      {isString(children)
        ? translation.t(children)
        : isFunction(children)
        ? children(translation)
        : children}
    </Component>
  );
};
