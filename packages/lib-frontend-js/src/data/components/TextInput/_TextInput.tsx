import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type _TextInputPropsModel } from '@lib/frontend/data/components/TextInput/_TextInput.models';
import {
  TEXT_INPUT_KEY,
  TEXT_INPUT_KEYBOARD,
} from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { type TextInputRefModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
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
      isBlurOnSubmit,
      isDisabled,
      keyboard,
      language,
      maxLength,
      numberOfLines,
      onBlur,
      onChange,
      onFocus,
      onKey,
      onSelection,
      onSubmit,
      placeholder,
      selection,
      value,
    },
    theme,
  ) => ({
    accessibilityLanguage: language,
    autoCapitalize: 'none',
    autoComplete: getAutoCompleteType(autoComplete, keyboard),
    autoCorrect: false,
    blurOnSubmit: isBlurOnSubmit,
    editable: !isDisabled,
    inputMode: getKeyboardType(keyboard),
    maxLength,
    multiline: !!numberOfLines,
    numberOfLines,
    onBlur,
    onChangeText: isDisabled ? undefined : (v) => onChange?.(v),
    onFocus,
    onKeyPress: onKey
      ? (e) => {
          const { key, metaKey } = e.nativeEvent as { key: string; metaKey: boolean };
          switch (key) {
            case 'ArrowDown':
              return onKey(TEXT_INPUT_KEY.DOWN, metaKey, e.preventDefault);
            case 'ArrowLeft':
              return onKey(TEXT_INPUT_KEY.LEFT, metaKey, e.preventDefault);
            case 'ArrowRight':
              return onKey(TEXT_INPUT_KEY.RIGHT, metaKey, e.preventDefault);
            case 'ArrowUp':
              return onKey(TEXT_INPUT_KEY.UP, metaKey, e.preventDefault);
            case 'Backspace':
              return onKey(TEXT_INPUT_KEY.REMOVE, metaKey, e.preventDefault);
            case 'Enter':
              return onKey(TEXT_INPUT_KEY.ENTER, metaKey, e.preventDefault);
            case 'Escape':
              return onKey(TEXT_INPUT_KEY.ESCAPE, metaKey, e.preventDefault);
            default:
              return onKey(key, metaKey, e.preventDefault);
          }
        }
      : undefined,
    onSelectionChange: (e) => {
      onSelection?.({ ...e.nativeEvent.selection });
    },
    onSubmitEditing: onSubmit ? () => onSubmit(value) : undefined,
    placeholder,
    placeholderTextColor: theme.color.border,
    returnKeyType: 'done',
    secureTextEntry: keyboard === TEXT_INPUT_KEYBOARD.PASSWORD,
    selection,
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

const getKeyboardType = (type?: TEXT_INPUT_KEYBOARD): InputModeOptions => {
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
  type?: TEXT_INPUT_KEYBOARD,
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
  type?: TEXT_INPUT_KEYBOARD,
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
