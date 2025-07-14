import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type _TextInputPropsModel } from '@lib/frontend/data/components/TextInput/_TextInput.models';
import {
  TEXT_INPUT_KEY,
  TEXT_INPUT_KEYBOARD,
} from '@lib/frontend/data/components/TextInput/TextInput.constants';
import {
  type TextInputKeyboardModel,
  type TextInputRefModel,
} from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type InputModeOptions, type TextInputProps } from 'react-native';
import { TextInput } from 'react-native';

export const getTextInputParams = (): ComposeComponentParamsModel<
  _TextInputPropsModel,
  TextInputProps,
  ViewStyleModel,
  TextInputRefModel
> => ({
  Component: TextInput,

  getProps: (
    {
      autoComplete,
      foregroundColor,
      isDisabled,
      keyboard,
      language,
      maxLength,
      numberOfLines,
      onBlur,
      onChange,
      onFocus,
      onKey,
      onSubmit,
      placeholder,
      value,
    },
    theme,
  ) => ({
    accessibilityLanguage: language,
    autoCapitalize: 'none',
    autoComplete: getAutoCompleteType(autoComplete, keyboard),
    autoCorrect: false,
    editable: !isDisabled,
    inputMode: getKeyboardType(keyboard),
    maxLength,
    multiline: numberOfLines ? numberOfLines > 1 : undefined,
    numberOfLines,
    onBlur,
    onChangeText: isDisabled ? undefined : (v) => onChange && onChange(v),
    onFocus,
    onKeyPress: onKey
      ? (e) => {
          switch (e.nativeEvent.key) {
            case 'ArrowDown':
              return onKey(TEXT_INPUT_KEY.DOWN);
            case 'ArrowLeft':
              return onKey(TEXT_INPUT_KEY.LEFT);
            case 'ArrowRight':
              return onKey(TEXT_INPUT_KEY.RIGHT);
            case 'ArrowUp':
              return onKey(TEXT_INPUT_KEY.UP);
            case 'Backspace':
              return onKey(TEXT_INPUT_KEY.REMOVE);
            case 'Escape':
              return onKey(TEXT_INPUT_KEY.ESCAPE);
            default: {
              return onKey(e.nativeEvent.key);
            }
          }
        }
      : undefined,
    onSubmitEditing: onSubmit ? () => onSubmit(value) : undefined,
    placeholder,
    placeholderTextColor: theme.color.border,
    returnKeyType: 'done',
    secureTextEntry: keyboard === TEXT_INPUT_KEYBOARD.PASSWORD,
    spellCheck: false,
    textColor: foregroundColor,
    textContentType: getTextContentType(autoComplete, keyboard),
    value: value ?? '',
  }),

  stylers: [
    ({ foregroundColor, height, isCenter }) => ({
      color: foregroundColor,
      height,
      minWidth: 0,
      textAlign: isCenter ? 'center' : undefined,
      width: '100%',
    }),
  ],
});

const getKeyboardType = (type?: TextInputKeyboardModel): InputModeOptions => {
  switch (type) {
    case TEXT_INPUT_KEYBOARD.NUMBER:
    case TEXT_INPUT_KEYBOARD.DECIMAL:
      return 'numeric';
    case TEXT_INPUT_KEYBOARD.EMAIL:
      return 'email';
    case TEXT_INPUT_KEYBOARD.TELEPHONE:
      return 'tel';
    default:
      return 'none';
  }
};

const getAutoCompleteType = (
  autoComplete?: string,
  type?: TextInputKeyboardModel,
): TextInputProps['autoComplete'] => {
  if (autoComplete) {
    switch (type) {
      case TEXT_INPUT_KEYBOARD.PASSWORD:
        return 'password';
      case TEXT_INPUT_KEYBOARD.EMAIL:
        return 'email';
      default:
        return 'off';
    }
  }
  return 'off';
};

const getTextContentType = (
  autoComplete?: string | boolean,
  type?: TextInputKeyboardModel,
): TextInputProps['textContentType'] => {
  if (autoComplete) {
    switch (type) {
      case TEXT_INPUT_KEYBOARD.PASSWORD:
        return 'password';
      case TEXT_INPUT_KEYBOARD.EMAIL:
        return 'emailAddress';
      default:
        return 'none';
    }
  }
  return 'none';
};

export const _TextInput = composeComponent<
  _TextInputPropsModel,
  TextInputProps,
  ViewStyleModel,
  TextInputRefModel
>(getTextInputParams());
