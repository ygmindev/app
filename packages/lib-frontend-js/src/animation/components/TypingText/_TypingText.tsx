import { type _TypingTextPropsModel } from '@lib/frontend/animation/components/TypingText/_TypingText.models';
import { TYPING_TEXT_SPEED } from '@lib/frontend/animation/components/TypingText/TypingText.constants';
import { type PropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { StyleSheet } from 'react-native';
import { TypeAnimation } from 'react-native-type-animation';

export const _TypingText = composeComponent<
  _TypingTextPropsModel,
  PropsModel<typeof TypeAnimation>,
  TextStyleModel
>({
  Component: TypeAnimation,

  getProps: ({ children, duration = TYPING_TEXT_SPEED, onFinish, style }) => {
    const textStyle = StyleSheet.flatten(style) ?? undefined;
    return {
      cursorStyle: textStyle,
      onCharTyped: onFinish
        ? ({ currentText }) => currentText === children && onFinish()
        : undefined,
      sequence: children ? [{ text: children }] : [],
      style: textStyle,
      typeSpeed: duration,
    };
  },
});
