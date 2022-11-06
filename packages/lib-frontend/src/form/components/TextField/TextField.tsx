import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { ErrorTooltip } from '@lib/frontend/form/components/ErrorTooltip/ErrorTooltip';
import { _TextField } from '@lib/frontend/form/components/TextField/_TextField';
import { TEXT_FIELD_TYPE } from '@lib/frontend/form/components/TextField/TextField.constants';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { useField } from '@lib/frontend/form/hooks/useField/useField';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { isFunction, isString, size, toString } from 'lodash';
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
  label,
  leftElement,
  onBlur,
  onChange,
  onFocus,
  rightElement,
  type,
  value,
  width,
  ...props
}: TextFieldPropsModel): ReactElement<TextFieldPropsModel> => {
  const inputRef = useRef<TextInput>(null);
  const theme = useTheme();
  const { transition } = theme.animation;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { fieldValue, setFieldValue } = useField({ defaultValue, onChange, value });
  const _value = toString(fieldValue);

  const _leftElement = isFunction(leftElement) ? leftElement(isFocused) : leftElement;
  let _rightElement = isFunction(rightElement) ? rightElement(isFocused) : rightElement;

  if (!isDisabled && !isNoClear) {
    _rightElement = (
      <Wrapper isRowAlign>
        <Appear
          isCenter
          isLazy={false}
          isVisible={isFocused && size(_value) > 0}>
          <Icon
            icon={ICON.times}
            onPress={() => _handleChange('')}
          />
        </Appear>

        {_rightElement}
      </Wrapper>
    );
  }

  if (error && (isString(error) || isFunction(error))) {
    _rightElement = (
      <Wrapper isRowAlign>
        {(isFunction(error) || isString(error)) && <ErrorTooltip error={error} />}

        {_rightElement}
      </Wrapper>
    );
  }

  const isMounted = useMount(
    {
      onMount: () =>
        isAutoFocus &&
        sleep({ duration: transition }).then(() => {
          if (isMounted) {
            const ref = forwardedRef || inputRef;
            ref.current && ref.current.focus();
          }
        }),
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
          setFieldValue(newValue);
        }
        break;
      }
      case TEXT_FIELD_TYPE.NUMBER_POSITIVE: {
        if (/^([1-9]+\d*)?$/.test(newValue)) {
          setFieldValue(newValue);
        }
        break;
      }
      case TEXT_FIELD_TYPE.DECIMAL: {
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
      error={error}
      forwardedRef={forwardedRef || inputRef}
      isDisabled={isDisabled}
      isFocused={isFocused}
      label={label}
      left={_leftElement}
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
      right={_rightElement}
      type={type}
      value={_value}
      width={width}
    />
  );
};
