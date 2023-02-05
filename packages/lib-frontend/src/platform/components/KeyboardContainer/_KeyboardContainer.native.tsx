import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/_KeyboardContainer.models';
import type { KeyboardAvoidingViewProps } from 'react-native';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

export const _KeyboardContainer = composeComponent<
  _KeyboardContainerPropsModel,
  KeyboardAvoidingViewProps
>({
  Component: TouchableWithoutFeedback,

  getProps: ({ children }) => ({
    children: (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flexGrow: 1 }}>
        {children}
      </KeyboardAvoidingView>
    ),
    onPress: Keyboard.dismiss,
  }),

  stylers: [{ flexGrow: 1 }],
});
