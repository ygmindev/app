import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { _TextFieldPropsModel } from '@lib/frontend/form/components/TextField/_TextField.models';
import { TEXT_FIELD_KEYBOARD } from '@lib/frontend/form/components/TextField/TextField.constants';
import type { TextFieldKeyboardModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { isNil } from 'lodash';
import type {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputProps,
} from 'react-native';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';

const _getKeyboardType = (type?: TextFieldKeyboardModel): TextInputProps['keyboardType'] => {
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

const _getAutoCompleteType = (
  autoComplete?: string | boolean,
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

const _getTextContentType = (
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
export const _TextField: SFCModel<_TextFieldPropsModel> = ({
  autoComplete,
  Component = (inputProps) => <NativeTextInput {...inputProps} />,
  error,
  forwardedRef,
  icon,
  isActive,
  isCenter,
  isDisabled,
  isFocused,
  keyboard,
  label,
  leftElement,
  maxLength,
  numberOfLines,
  onBlur,
  onChange,
  onEscape,
  onFocus,
  onRemove,
  onSubmit,
  placeholder,
  rightElement,
  testID,
  value,
  width,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });

  const _isError = !isNil(error) && error !== false;
  const _isActive = isFocused || isActive;

  const _backgroundColor = isDisabled
    ? theme.colors.tone.neutral.muted
    : theme.colors.tone.neutral.main;

  const _activeColor = _isError
    ? theme.colors.tone.error.main
    : _isActive
    ? theme.colors.tone.primary.main
    : theme.colors.tone.neutral.muted;

  const _colors = {
    from: theme.colors.tone.neutral.muted,
    to: _isActive ? _activeColor : theme.colors.tone.neutral.muted,
  };

  const _leftElement = leftElement && (
    <Appearable
      isCenter
      isLazy={false}
      isVisible={!isEmpty(value) || isFocused || !label}
      mTop={18}>
      {leftElement(_isActive)}
    </Appearable>
  );

  const _rightElement = rightElement && rightElement(_isActive);

  return (
    <Wrapper
      animation={{ from: { borderColor: _colors.from }, to: { borderColor: _colors.to } }}
      backgroundColor={_backgroundColor}
      border
      grow
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      round
      style={styles}
      testID={testID}
      width={width}>
      <Wrapper
        backgroundColor={_backgroundColor}
        bottom={0}
        height={3}
        left={0}
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        zIndex={1}
      />

      <TextInput
        autoCapitalize="none"
        autoComplete={_getAutoCompleteType(autoComplete, keyboard)}
        autoCorrect={false}
        dense
        disabled={isDisabled}
        error={_isError}
        keyboardType={_getKeyboardType(keyboard)}
        label={
          (icon || label) && (
            <Wrapper isRowAlign>
              {icon && (
                <Icon
                  animation={{ from: { color: _colors.from }, to: { color: _colors.to } }}
                  icon={icon}
                />
              )}

              {label && (
                <AnimatableText
                  animation={{ from: { color: _colors.from }, to: { color: _colors.to } }}
                  size={THEME_SIZE.SMALL}>
                  {label}
                </AnimatableText>
              )}
            </Wrapper>
          )
        }
        maxLength={maxLength}
        mode="flat"
        multiline={(numberOfLines as number) > 1}
        numberOfLines={numberOfLines}
        onBlur={() => {
          onBlur && onBlur();
        }}
        onChangeText={onChange}
        onFocus={() => {
          onFocus && onFocus();
        }}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
          switch (e.nativeEvent.key) {
            case 'Backspace':
              return onRemove && onRemove();
            case 'Escape':
              return onEscape && onEscape();
            default:
              return null;
          }
        }}
        onSubmitEditing={() => onSubmit && onSubmit(value || '')}
        placeholder={placeholder}
        ref={forwardedRef}
        render={(inputProps) => (
          <Wrapper
            backgroundColor={_backgroundColor}
            grow
            isOverflowHidden
            isRow
            pLeft={_leftElement ? THEME_SIZE.SMALL : undefined}
            pRight={_rightElement ? THEME_SIZE.SMALL : undefined}
            zIndex={-1}>
            {_leftElement}

            {Component({
              ...inputProps,
              style: StyleSheet.flatten([
                ...inputProps.style,
                isCenter && { textAlign: 'center' },
                { width: '100%' },
              ]),
            })}

            {_rightElement}
          </Wrapper>
        )}
        secureTextEntry={keyboard === TEXT_FIELD_KEYBOARD.PASSWORD}
        spellCheck={false}
        textContentType={_getTextContentType(autoComplete, keyboard)}
        theme={{
          animation: { scale: 1 },
          colors: {
            background: 'transparent',
            placeholder: theme.colors.tone.neutral.muted,
            primary: theme.colors.tone.primary.main,
          },
        }}
        value={value}
      />
    </Wrapper>
  );
};
