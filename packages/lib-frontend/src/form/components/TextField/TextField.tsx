import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { MaskedTextField } from '@lib/frontend/form/components/MaskedTextField/MaskedTextField';
import { _TextField } from '@lib/frontend/form/components/TextField/_TextField';
import { TEXT_FIELD_KEYBOARD } from '@lib/frontend/form/components/TextField/TextField.constants';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { isTranslatableText } from '@lib/frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import type { ViewStyleModel } from '@lib/frontend/style/style.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ReactElement } from 'react';
import { useRef, useState } from 'react';
import type { TextInput } from 'react-native';

export const TextField: SFCModel<TextFieldPropsModel> = ({
  defaultValue,
  error,
  forwardedRef,
  isAutoFocus,
  isCenter,
  isDisabled,
  isNoClear,
  keyboard,
  label,
  leftElement,
  mask,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  rightElement,
  value,
  width,
  ...props
}: TextFieldPropsModel): ReactElement<TextFieldPropsModel> => {
  const inputRef = useRef<TextInput>(null);
  const { t } = useTranslation();
  const theme = useTheme();
  const { fieldValue, setFieldValue } = useFieldValue({ defaultValue, onChange, value });
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const _rightElement = (isActive?: boolean): ReactElement => (
    <Wrapper
      isRowAlign
      pRight={isCenter ? undefined : THEME_BASIC_SIZE.SMALL}>
      {fieldValue && !isDisabled && !isNoClear && (
        <Appearable
          isActive={isActive && fieldValue.length > 0}
          isCenter
          isLazy={false}>
          <Button
            icon="times"
            onPress={() => _handleChange('')}
            type={BUTTON_TYPE.ICON}
          />
        </Appearable>
      )}

      {isTranslatableText(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

      {rightElement && rightElement(isActive)}
    </Wrapper>
  );

  const isMounted = useMount({
    deps: [forwardedRef, isAutoFocus, theme.animation.transition],

    onMount: () =>
      isAutoFocus &&
      sleep({ duration: theme.animation.transition }).then(() => {
        if (isMounted) {
          const ref = forwardedRef || inputRef;
          ref.current && ref.current.focus();
        }
      }),
  });

  const _setIsFocused = (value: boolean): void => {
    setIsFocused(value);
    value ? onFocus && onFocus() : onBlur && onBlur();
  };

  const _handleChange = (newValue: string): void => {
    switch (keyboard) {
      case TEXT_FIELD_KEYBOARD.NUMBER:
      case TEXT_FIELD_KEYBOARD.TEL: {
        if (/^\d*$/.test(newValue)) {
          setFieldValue(newValue);
        }
        break;
      }
      case TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE: {
        if (/^([1-9]+\d*)?$/.test(newValue)) {
          setFieldValue(newValue);
        }
        break;
      }
      case TEXT_FIELD_KEYBOARD.DECIMAL: {
        if (/^\d*\.?\d*$/.test(newValue)) {
          setFieldValue(newValue);
        }
        break;
      }
      default: {
        setFieldValue(newValue);
        break;
      }
    }
  };
  return (
    <_TextField
      {...props}
      Component={
        mask
          ? ({ style, ...inputProps }) => (
              <MaskedTextField
                {...inputProps}
                mask={mask}
                style={style as ViewStyleModel}
              />
            )
          : undefined
      }
      error={isTranslatableText(error) && t(error)}
      forwardedRef={forwardedRef || inputRef}
      height={label ? theme.shape.height.l : theme.shape.height.m}
      isCenter={isCenter}
      isDisabled={isDisabled}
      isFocused={isFocused}
      keyboard={keyboard}
      label={label && t(label)}
      leftElement={leftElement}
      onBlur={async () => {
        onBlur && onBlur();
        _setIsFocused(false);
      }}
      onChange={_handleChange}
      onEscape={isNoClear ? undefined : () => _handleChange('')}
      onFocus={async () => {
        onFocus && onFocus();
        _setIsFocused(true);
      }}
      placeholder={mask || placeholder}
      rightElement={_rightElement}
      value={fieldValue}
      width={width}
    />
  );
};
