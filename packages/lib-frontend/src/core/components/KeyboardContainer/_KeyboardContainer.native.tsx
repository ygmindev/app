import { type KeyboardAvoidingViewProps } from 'react-native';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { type _KeyboardContainerPropsModel } from '@lib/frontend/core/components/KeyboardContainer/_KeyboardContainer.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _KeyboardContainer = composeComponent<
  _KeyboardContainerPropsModel,
  Omit<KeyboardAvoidingViewProps, 'hitSlop'>
>({
  Component: TouchableWithoutFeedback,

  getProps: ({ children }) => ({
    children: (
      <KeyboardAvoidingView
        behavior="padding"
        hitSlop={undefined}
        style={{ flexGrow: 1 }}>
        {children}
      </KeyboardAvoidingView>
    ),
    onPress: Keyboard.dismiss,
  }),

  stylers: [{ flexGrow: 1 }],
});
