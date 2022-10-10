import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { _TextFieldPropsModel } from '@lib/frontend/form/components/TextField/_TextField.models';
import { TEXT_FIELD_TYPE } from '@lib/frontend/form/components/TextField/TextField.constants';
import type { TextFieldTypeModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { borderStyler } from '@lib/frontend/styling/utils/styler/borderStyler/borderStyler';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { textStyler } from '@lib/frontend/styling/utils/styler/textStyler/textStyler';
import {
  THEME_BASIC_SIZE,
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
} from '@lib/frontend/styling/utils/theme/theme.constants';
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

const _getKeyboardType = (type?: TextFieldTypeModel): TextInputProps['keyboardType'] => {
  switch (type) {
    case TEXT_FIELD_TYPE.NUMBER:
    case TEXT_FIELD_TYPE.NUMBER_POSITIVE:
    case TEXT_FIELD_TYPE.DECIMAL:
      return 'numeric';
    case TEXT_FIELD_TYPE.EMAIL:
      return 'email-address';
    case TEXT_FIELD_TYPE.TEL:
      return 'phone-pad';
    default:
      return 'default';
  }
};

const _getAutoCompleteType = (
  autoComplete?: string | boolean,
  type?: TextFieldTypeModel,
): TextInputProps['autoComplete'] => {
  if (autoComplete) {
    switch (type) {
      case TEXT_FIELD_TYPE.PASSWORD:
        return 'password';
      case TEXT_FIELD_TYPE.EMAIL:
        return 'email';
      default:
        return 'off';
    }
  }
  return 'off';
};

const _getTextContentType = (
  autoComplete?: string | boolean,
  type?: TextFieldTypeModel,
): TextInputProps['textContentType'] => {
  if (autoComplete) {
    switch (type) {
      case TEXT_FIELD_TYPE.PASSWORD:
        return 'password';
      case TEXT_FIELD_TYPE.EMAIL:
        return 'emailAddress';
      default:
        return 'none';
    }
  }
  return 'none';
};

const _getTextFieldProps = ({
  onChange,
  onEscape,
  onRemove,
  onSubmit,
  type,
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
  type,
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
        isVisible={!isEmpty(value) || isFocused}
        mTop={18}>
        {left}
      </Appear>
    ) : null;

  const textInputProps = _getTextFieldProps({
    onChange,
    onEscape,
    onRemove,
    onSubmit,
    type,
    value,
  });

  return (
    <Wrapper
      animation={{ transition: ['borderColor'] }}
      backgroundColor={backgroundColor}
      grow
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      round
      style={[styles, borderStyles]}
      testID={testID}>
      <Wrapper
        backgroundColor={backgroundColor}
        bottom={0}
        height={3}
        left={0}
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        zIndex={1}
      />

      <TextInput
        {...(textInputProps as typeof TextInput)}
        autoCapitalize="none"
        autoComplete={_getAutoCompleteType(autoComplete, type)}
        dense
        disabled={isDisabled}
        error={isError}
        label={
          (icon ? (
            <IconText
              animation={{ transition: ['color'] }}
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
            backgroundColor={backgroundColor}
            grow
            isOverflowHidden
            isRow
            pLeft={leftElement ? THEME_BASIC_SIZE.SMALL : undefined}
            pRight={right ? THEME_BASIC_SIZE.SMALL : undefined}
            zIndex={-1}>
            {leftElement}

            {Component({ ...inputProps, style: [...inputProps.style, textStyles, { width }] })}

            {right}
          </Wrapper>
        )}
        secureTextEntry={type === 'password'}
        textContentType={_getTextContentType(autoComplete, type)}
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
