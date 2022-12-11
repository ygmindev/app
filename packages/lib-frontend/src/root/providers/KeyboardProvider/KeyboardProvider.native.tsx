import type { SFCModel } from '@lib/frontend/core/core.models';
import type { KeyboardProviderPropsModel } from '@lib/frontend/root/providers/KeyboardProvider/KeyboardProvider.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

export const KeyboardProvider: SFCModel<KeyboardProviderPropsModel> = ({
  children,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props, stylers: [{ flexGrow: 1 }] });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles} testID={testID}>
      <KeyboardAvoidingView behavior={'padding'} style={{ flexGrow: 1 }}>
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
