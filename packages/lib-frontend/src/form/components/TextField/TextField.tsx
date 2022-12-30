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
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { isString } from 'lodash';
import type { ReactElement } from 'react';
import { useCallback, useRef, useState } from 'react';
import type { TextInput } from 'react-native';

export const TextField: SFCModel<TextFieldPropsModel> = ({
  defaultValue,
  error,
  forwardedRef,
  isAutoFocus,
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
  const theme = useTheme();
  const { fieldValue, setFieldValue } = useFieldValue({ defaultValue, onChange, value });
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const _rightElement = (isActive?: boolean): ReactElement => (
    <Wrapper
      isRowAlign
      pRight={THEME_BASIC_SIZE.SMALL}>
      {fieldValue && !isDisabled && !isNoClear && (
        <Appearable
          isCenter
          isLazy={false}
          isVisible={isActive && fieldValue.length > 0}>
          <Button
            icon="times"
            onPress={() => _handleChange('')}
            type={BUTTON_TYPE.ICON}
          />
        </Appearable>
      )}

      {error && isString(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

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

  const _setIsFocused = useCallback(
    async (value: boolean) => {
      await sleep();
      if (isMounted) {
        setIsFocused(value);
        value ? onFocus && onFocus() : onBlur && onBlur();
      }
    },
    [isMounted, setIsFocused, onBlur, onFocus],
  );

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
          ? (inputProps) => (
              <MaskedTextField
                {...inputProps}
                mask={mask}
              />
            )
          : undefined
      }
      error={error}
      forwardedRef={forwardedRef || inputRef}
      isDisabled={isDisabled}
      isFocused={isFocused}
      keyboard={keyboard}
      label={label}
      leftElement={leftElement}
      onBlur={async () => {
        onBlur && onBlur();
        await _setIsFocused(false);
      }}
      onChange={_handleChange}
      onEscape={isNoClear ? undefined : () => _handleChange('')}
      onFocus={async () => {
        onFocus && onFocus();
        await _setIsFocused(true);
      }}
      placeholder={mask || placeholder}
      rightElement={_rightElement}
      value={fieldValue}
      width={width}
    />
  );
};
