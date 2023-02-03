import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { AnimatableText } from '@lib/frontend/animation/components/AnimatableText/AnimatableText';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import type { _TextFieldPropsModel } from '@lib/frontend/form/components/TextField/_TextField.models';
import { TEXT_FIELD_KEYBOARD } from '@lib/frontend/form/components/TextField/TextField.constants';
import type {
  TextFieldKeyboardModel,
  TextFieldRefModel,
} from '@lib/frontend/form/components/TextField/TextField.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import isString from 'lodash/isString';
import type { RefObject } from 'react';
import { forwardRef } from 'react';
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

export const _TextField: RSFCModel<TextFieldRefModel, _TextFieldPropsModel> = forwardRef(
  (
    {
      autoComplete,
      Component = (inputProps: TextInputProps) => <NativeTextInput {...inputProps} />,
      error,
      height,
      icon,
      isCenter,
      elementState,
      onElementStateChange,
      keyboard,
      label,
      language,
      leftElement,
      maxLength,
      nativeID,
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
    },
    ref,
  ) => {
    const theme = useTheme();
    const { styles } = useStyles({ props });

    const _isError = error === true || (isString(error) && error.length > 0);
    const _isDisabled = elementState === ELEMENT_STATE.DISABLED;

    const _activeBackgroundColor = theme.colors.tone.neutral.main;
    const _disabledBackgroundColor = palette({
      color: theme.colors.tone.neutral.main,
      lightness: theme.colors.disabledLightness,
    });
    const _activeColor = _isError ? theme.colors.tone.error.main : theme.colors.tone.primary.main;
    const _inactiveColor = theme.colors.tone.neutral.muted;
    const _containerAnimation: AnimationModel = {
      states: {
        [ELEMENT_STATE.DISABLED]: { backgroundColor: _disabledBackgroundColor },
        [ELEMENT_STATE.INACTIVE]: {
          backgroundColor: _activeBackgroundColor,
          borderColor: _inactiveColor,
        },
        [ELEMENT_STATE.ACTIVE]: {
          backgroundColor: _activeBackgroundColor,
          borderColor: _activeColor,
        },
      },
    };
    const _childrenAnimation: AnimationModel<TextStyleModel> = {
      states: {
        [ELEMENT_STATE.DISABLED]: { color: _inactiveColor },
        [ELEMENT_STATE.INACTIVE]: { color: _inactiveColor },
        [ELEMENT_STATE.ACTIVE]: { color: _activeColor },
      },
    };

    const _leftElement = leftElement && (
      <Appearable
        isCenter
        isVisible={!isEmpty(value) || elementState === ELEMENT_STATE.ACTIVE || !label}
        mTop={18}>
        {leftElement(elementState)}
      </Appearable>
    );

    const _rightElement = rightElement && rightElement(elementState);

    return (
      <Wrapper
        animation={_containerAnimation}
        backgroundColor={_activeBackgroundColor}
        border
        elementState={elementState}
        grow
        height={height}
        isOverflowHidden
        position={SHAPE_POSITION.RELATIVE}
        round
        style={styles}
        testID={testID}
        width={width}>
        <Wrapper
          backgroundColor={_activeBackgroundColor}
          bottom={0}
          height={3}
          left={0}
          position={SHAPE_POSITION.ABSOLUTE}
          right={0}
          zIndex={1}
        />

        <TextInput
          accessibilityLabelledBy={nativeID}
          accessibilityLanguage={language}
          autoCapitalize="none"
          autoComplete={_getAutoCompleteType(autoComplete, keyboard)}
          autoCorrect={false}
          dense
          disabled={_isDisabled}
          error={_isError}
          keyboardType={_getKeyboardType(keyboard)}
          label={
            (icon || label) && (
              <Wrapper
                isRowAlign
                nativeID={nativeID}>
                {icon && (
                  <Icon
                    animation={_childrenAnimation}
                    elementState={elementState}
                    icon={icon}
                  />
                )}

                {label && (
                  <AnimatableText
                    animation={_childrenAnimation}
                    elementState={elementState}
                    fontSize={THEME_SIZE.SMALL}>
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
            onElementStateChange && onElementStateChange(ELEMENT_STATE.INACTIVE);
          }}
          onChangeText={onChange}
          onFocus={() => {
            onFocus && onFocus();
            onElementStateChange && onElementStateChange(ELEMENT_STATE.ACTIVE);
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
          ref={ref as RefObject<NativeTextInput>}
          render={(inputProps) => (
            <Wrapper
              backgroundColor={_activeBackgroundColor}
              grow
              isCenter={isCenter}
              isOverflowHidden
              isRow
              zIndex={-1}>
              {_leftElement}

              {Component({
                ...inputProps,
                style: StyleSheet.flatten([
                  ...inputProps.style,
                  { width: '100%' },
                  isCenter && { padding: 0, textAlign: 'center' },
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
            },
          }}
          value={value}
        />
      </Wrapper>
    );
  },
);
