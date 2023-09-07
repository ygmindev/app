import { type TextInputProps } from 'react-native';
import { TextInput } from 'react-native';

import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { type _TextFieldPropsModel } from '#lib-frontend/data/components/TextField/_TextField.models';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import { type TextFieldKeyboardModel } from '#lib-frontend/data/components/TextField/TextField.models';

const getKeyboardType = (type?: TextFieldKeyboardModel): TextInputProps['keyboardType'] => {
  switch (type) {
    case TEXT_FIELD_KEYBOARD.NUMBER:
    case TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE:
    case TEXT_FIELD_KEYBOARD.DECIMAL:
      return 'numeric';
    case TEXT_FIELD_KEYBOARD.EMAIL:
      return 'email-address';
    case TEXT_FIELD_KEYBOARD.TEL:
      return 'phone-pad';
    default:
      return 'default';
  }
};

const getAutoCompleteType = (
  autoComplete?: string,
  type?: TextFieldKeyboardModel,
): TextInputProps['autoComplete'] => {
  if (autoComplete) {
    switch (type) {
      case TEXT_FIELD_KEYBOARD.PASSWORD:
        return 'password';
      case TEXT_FIELD_KEYBOARD.EMAIL:
        return 'email';
      default:
        return 'off';
    }
  }
  return 'off';
};

const getTextContentType = (
  autoComplete?: string | boolean,
  type?: TextFieldKeyboardModel,
): TextInputProps['textContentType'] => {
  if (autoComplete) {
    switch (type) {
      case TEXT_FIELD_KEYBOARD.PASSWORD:
        return 'password';
      case TEXT_FIELD_KEYBOARD.EMAIL:
        return 'emailAddress';
      default:
        return 'none';
    }
  }
  return 'none';
};

export const _TextField = composeComponent<_TextFieldPropsModel, TextInputProps>({
  Component: TextInput,

  getProps: ({
    autoComplete,
    foregroundColor,
    isDisabled,
    keyboard,
    language,
    maxLength,
    numberOfLines,
    onBlur,
    onChange,
    onEscape,
    onFocus,
    onRemove,
    onSubmit,
    value,
  }) => ({
    accessibilityLanguage: language,
    autoCapitalize: 'none',
    autoComplete: getAutoCompleteType(autoComplete, keyboard),
    autoCorrect: false,
    keyboardType: getKeyboardType(keyboard),
    maxLength,
    multiline: numberOfLines ? numberOfLines > 1 : undefined,
    numberOfLines,
    onBlur,
    onChangeText: isDisabled ? undefined : (v) => onChange && onChange(v),
    onFocus,
    onKeyPress: (e) => {
      switch (e.nativeEvent.key) {
        case 'Backspace':
          return onRemove && onRemove();
        case 'Escape':
          return onEscape && onEscape();
        default:
          return null;
      }
    },
    onSubmitEditing: onSubmit,
    secureTextEntry: keyboard === TEXT_FIELD_KEYBOARD.PASSWORD,
    spellCheck: false,
    textColor: foregroundColor,
    textContentType: getTextContentType(autoComplete, keyboard),
    value: value ?? '',
  }),

  stylers: [
    ({ height, isCenter }) => ({
      height,
      textAlign: isCenter ? 'center' : undefined,
      width: '100%',
    }),
  ],
});