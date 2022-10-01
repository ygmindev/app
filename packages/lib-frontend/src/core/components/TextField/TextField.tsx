import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import { ErrorTooltip } from '@lib/frontend/core/components/ErrorTooltip/ErrorTooltip';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { _TextField } from '@lib/frontend/core/components/TextField/_TextField';
import { TEXT_FIELD_TYPE } from '@lib/frontend/core/components/TextField/TextField.constants';
import type { TextFieldPropsModel } from '@lib/frontend/core/components/TextField/TextField.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useField } from '@lib/frontend/core/hooks/useField/useField';
import { useIsMounted } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { isFunction, isString, size, toNumber, toString } from 'lodash';
import type { ReactElement } from 'react';
import { useCallback, useRef, useState } from 'react';
import type { TextInput } from 'react-native';

export const TextField = <TType,>({
  defaultValue,
  error,
  forwardedRef,
  isAutoFocus,
  isDisabled,
  isNoClear,
  label,
  left,
  onBlur,
  onChange,
  onFocus,
  right,
  type,
  value,
  width,
  ...props
}: TextFieldPropsModel<TType>): ReactElement<TextFieldPropsModel<TType>> => {
  const inputRef = useRef<TextInput>(null);
  const theme = useTheme();
  const transition = theme.animation.transition;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { fieldValue, setFieldValue } = useField<TType>({ defaultValue, onChange, value });
  const _value = toString(fieldValue);

  const leftElement = isFunction(left) ? left(isFocused) : left;
  let rightElement = isFunction(right) ? right(isFocused) : right;

  if (!isDisabled && !isNoClear) {
    rightElement = (
      <Wrapper isRowAlign>
        <Appear
          isCenter
          isVisible={isFocused && size(_value) > 0}>
          <Icon
            icon={ICON.times}
            onPress={() => _handleChange('')}
          />
        </Appear>
        {rightElement}
      </Wrapper>
    );
  }

  if (error && (isString(error) || isFunction(error))) {
    rightElement = (
      <Wrapper isRowAlign>
        {(isFunction(error) || isString(error)) && <ErrorTooltip error={error} />}
        {rightElement}
      </Wrapper>
    );
  }

  const isMounted = useIsMounted(
    {
      onMount: () => {
        isAutoFocus &&
          sleep({ duration: transition }).then(() => {
            if (isMounted) {
              const ref = forwardedRef || inputRef;
              ref.current && ref.current.focus();
            }
          });
      },
    },
    [forwardedRef, isAutoFocus, transition],
  );

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
    switch (type) {
      case TEXT_FIELD_TYPE.NUMBER:
      case TEXT_FIELD_TYPE.TEL: {
        if (/^\d*$/.test(newValue)) {
          const valueTyped = newValue === '' ? undefined : toNumber(newValue);
          setFieldValue(valueTyped as unknown as TType);
        }
        break;
      }
      case TEXT_FIELD_TYPE.NUMBER_POSITIVE: {
        if (/^([1-9]+\d*)?$/.test(newValue)) {
          const valueTyped = newValue === '' ? undefined : toNumber(newValue);
          setFieldValue(valueTyped as unknown as TType);
        }
        break;
      }
      case TEXT_FIELD_TYPE.DECIMAL: {
        if (/^\d*\.?\d*$/.test(newValue)) {
          const valueTyped = newValue === '' ? undefined : toNumber(newValue);
          setFieldValue(valueTyped as unknown as TType);
        }
        break;
      }
      default: {
        setFieldValue(newValue as unknown as TType);
        break;
      }
    }
  };

  return (
    <_TextField
      {...props}
      error={error}
      forwardedRef={forwardedRef || inputRef}
      isDisabled={isDisabled}
      isFocused={isFocused}
      label={label}
      left={leftElement}
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
      right={rightElement}
      type={type}
      value={_value}
      width={width}
    />
  );
};
