import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { _TextFieldPropsModel } from '@lib/frontend/form/components/TextField/_TextField.models';
import { TEXT_FIELD_KEYBOARD } from '@lib/frontend/form/components/TextField/TextField.constants';
import type { TextFieldKeyboardModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_RELATIVE_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { borderStyler } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import type { PartialModel } from '@lib/shared/core/core.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { isNil } from 'lodash';
import type { ReactElement } from 'react';
import { useMemo } from 'react';
import type {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputProps,
} from 'react-native';
import { TextInput as NativeTextInput } from 'react-native';
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

const _getTextFieldProps = ({
  keyboard: type,
  onChange,
  onEscape,
  onRemove,
  onSubmit,
  value,
}: _TextFieldPropsModel): PartialModel<TextInputProps> => ({
  autoCorrect: false,
  keyboardType: _getKeyboardType(type),
  onChangeText: onChange,
  onKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    switch (e.nativeEvent.key) {
      case 'Backspace':
        return onRemove && onRemove();
      case 'Escape':
        return onEscape && onEscape();
      default:
        return null;
    }
  },
  onSubmitEditing: () => onSubmit && onSubmit(value || ''),
  spellCheck: false,
});

export const _TextField = ({
  autoComplete,
  align,
  maxLength,
  numberOfLines,
  placeholder,
  left,
  right,
  isFocused,
  isTransparent,
  keyboard,
  onFocus,
  onBlur,
  onRemove,
  onEscape,
  icon,
  onSubmit,
  value,
  onChange,
  isDisabled,
  error,
  width,
  label,
  forwardedRef,
  isActive,
  Component = (inputProps) => <NativeTextInput {...inputProps} />,
  testID,
  ...props
}: _TextFieldPropsModel): ReactElement<_TextFieldPropsModel> => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { styles } = useStyles({ props });

  const isError = !isNil(error) && error !== false;
  const backgroundColor = isDisabled
    ? THEME_RELATIVE_COLOR.MUTED
    : isTransparent
    ? 'transparent'
    : THEME_RELATIVE_COLOR.MAIN;

  const activeColor = useMemo(
    () => (isError ? THEME_COLOR.ERROR : isFocused || isActive ? THEME_COLOR.PRIMARY : undefined),
    [isError, isFocused, isActive],
  );

  const { styles: textStyles } = useStyles({ props: { align }, stylers: [textStyler] });
  const { computedStyles: borderStyles } = useStyles({
    props: isTransparent ? {} : { border: true, borderColor: activeColor },
    stylers: [borderStyler],
  });

  const leftElement =
    left && label ? (
      <Appear
        isCenter
        isLazy={false}
        isVisible={!isEmpty(value) || isFocused}
        mTop={18}>
        {left}
      </Appear>
    ) : null;

  const textInputProps = _getTextFieldProps({
    keyboard,
    onChange,
    onEscape,
    onRemove,
    onSubmit,
    value,
  });

  return (
    <Wrapper
      // animation={{ transition: ['backgroundColor', 'borderColor'] }}
      backgroundColor={backgroundColor}
      grow
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      round
      style={[styles, borderStyles]}
      testID={testID}>
      <Wrapper
        // animation={{ transition: ['backgroundColor'] }}
        bottom={0}
        backgroundColor={backgroundColor}
        height={3}
        left={0}
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        zIndex={1}
      />

      <TextInput
        {...(textInputProps as typeof TextInput)}
        autoCapitalize="none"
        autoComplete={_getAutoCompleteType(autoComplete, keyboard)}
        dense
        disabled={isDisabled}
        error={isError}
        label={
          (icon ? (
            <IconText
              // animation={{ transition: ['color'] }}
              color={activeColor || THEME_RELATIVE_COLOR.MUTED}
              icon={icon}>
              {label}
            </IconText>
          ) : (
            t(label)
          )) as unknown as string
        }
        maxLength={maxLength}
        mode="flat"
        multiline={(numberOfLines as number) > 1}
        numberOfLines={numberOfLines}
        onBlur={async () => {
          onBlur && onBlur();
        }}
        onFocus={async () => {
          onFocus && onFocus();
        }}
        placeholder={placeholder}
        ref={forwardedRef}
        render={(inputProps) => (
          <Wrapper
            // animation={{ transition: ['backgroundColor'] }}
            backgroundColor={backgroundColor}
            grow
            isOverflowHidden
            isRow
            pLeft={leftElement ? THEME_SIZE.SMALL : undefined}
            pRight={right ? THEME_SIZE.SMALL : undefined}
            zIndex={-1}>
            {leftElement}

            {Component({ ...inputProps, style: [...inputProps.style, textStyles, { width }] })}

            {right}
          </Wrapper>
        )}
        secureTextEntry={keyboard === 'password'}
        textContentType={_getTextContentType(autoComplete, keyboard)}
        theme={{
          animation: { scale: 1 },
          colors: {
            background: 'transparent',
            placeholder: theme.colors.border,
            primary: theme.colors.primary.main,
          },
        }}
        value={value}
      />
    </Wrapper>
  );
};
