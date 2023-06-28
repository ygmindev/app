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

import type { AnimationModel } from '#lib-frontend/animation/animation.models';
import { AnimatableText } from '#lib-frontend/animation/components/AnimatableText/AnimatableText';
import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import type { RSFCModel } from '#lib-frontend/core/core.models';
import type { _TextFieldPropsModel } from '#lib-frontend/form/components/TextField/_TextField.models';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import type {
  TextFieldKeyboardModel,
  TextFieldRefModel,
} from '#lib-frontend/form/components/TextField/TextField.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import type { TextStyleModel, ViewStyleModel } from '#lib-frontend/style/style.models';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';

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

export const _TextField: RSFCModel<TextFieldRefModel, _TextFieldPropsModel> = forwardRef(
  (
    {
      Component = (inputProps: TextInputProps) => <NativeTextInput {...inputProps} />,
      autoComplete,
      elementState,
      error,
      height,
      icon,
      isCenter,
      isTransparent,
      keyboard,
      label,
      language,
      leftElement,
      maxLength,
      nativeID,
      numberOfLines,
      onBlur,
      onChange,
      onElementStateChange,
      onEscape,
      onFocus,
      onRemove,
      onSubmit,
      placeholder,
      rightElement,
      round,
      testID,
      value,
      width,
      zIndex,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const { styles } = useStyles({ props });

    const isError = error === true || (isString(error) && error.length > 0);
    const isDisabled = elementState === ELEMENT_STATE.DISABLED;
    const activeBackgroundColor = theme.colors.tone.neutral.main;
    const activeColor = isError ? theme.colors.tone.error.main : theme.colors.tone.primary.main;
    const inactiveColor = isError ? theme.colors.tone.error.main : theme.colors.tone.neutral.muted;

    const containerAnimation: AnimationModel = {
      states: {
        [ELEMENT_STATE.DISABLED]: {
          borderColor: isTransparent ? undefined : inactiveColor,
          opacity: theme.colors.disabledOpacity,
        },
        [ELEMENT_STATE.INACTIVE]: {
          backgroundColor: activeBackgroundColor,
          borderColor: isTransparent ? undefined : inactiveColor,
          opacity: 1,
        },
        [ELEMENT_STATE.ACTIVE]: {
          backgroundColor: activeBackgroundColor,
          borderColor: isTransparent ? undefined : activeColor,
          opacity: 1,
        },
      },
    };

    const childrenAnimation: AnimationModel<TextStyleModel> = {
      states: {
        [ELEMENT_STATE.DISABLED]: { color: inactiveColor },
        [ELEMENT_STATE.INACTIVE]: { color: inactiveColor },
        [ELEMENT_STATE.ACTIVE]: { color: activeColor },
      },
    };

    const leftElementF = leftElement && (
      <Appearable
        isCenter
        isVisible={!isEmpty(value) || elementState === ELEMENT_STATE.ACTIVE || !label}
        mLeft={label ? true : THEME_SIZE.SMALL}
        mTop={label ? 18 : undefined}>
        {leftElement}
      </Appearable>
    );

    return (
      <Wrapper
        animation={containerAnimation}
        border={!isTransparent}
        elementState={elementState}
        grow
        height={height}
        isOverflowHidden
        position={SHAPE_POSITION.RELATIVE}
        round={round || true}
        style={styles}
        testID={testID}
        width={width}
        zIndex={zIndex}>
        <TextInput
          accessibilityLabelledBy={nativeID}
          accessibilityLanguage={language}
          activeUnderlineColor="transparent"
          autoCapitalize="none"
          autoComplete={getAutoCompleteType(autoComplete, keyboard)}
          autoCorrect={false}
          dense
          disabled={isDisabled}
          error={isError}
          keyboardType={getKeyboardType(keyboard)}
          label={
            (icon || label) && (
              <Wrapper
                isRowAlign
                nativeID={nativeID}>
                {icon && (
                  <Icon
                    animation={childrenAnimation}
                    elementState={elementState}
                    icon={icon}
                  />
                )}

                {label && (
                  <AnimatableText
                    animation={childrenAnimation}
                    elementState={elementState}
                    fontSize={THEME_SIZE_MORE.SMALL}>
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
          onSubmitEditing={() => onSubmit && onSubmit()}
          placeholder={placeholder}
          ref={ref as RefObject<NativeTextInput>}
          render={(inputProps) => (
            <Wrapper
              animation={containerAnimation}
              elementState={elementState}
              grow
              isCenter={isCenter}
              isOverflowHidden
              isRow
              zIndex={-1}>
              {leftElementF}

              <Wrapper grow>
                {Component({
                  ...inputProps,
                  style: StyleSheet.flatten([
                    inputProps.style as ViewStyleModel,
                    { minWidth: '100%', width: 0 },
                    isCenter && { padding: 0, textAlign: 'center' },
                  ]) as ViewStyleModel,
                })}
              </Wrapper>

              {rightElement}
            </Wrapper>
          )}
          secureTextEntry={keyboard === TEXT_FIELD_KEYBOARD.PASSWORD}
          spellCheck={false}
          textContentType={getTextContentType(autoComplete, keyboard)}
          theme={{
            animation: { scale: 1 },
            colors: {
              background: 'transparent',
              placeholder: theme.colors.tone.neutral.muted,
            },
          }}
          underlineColor="transparent"
          value={value}
        />
      </Wrapper>
    );
  },
);
