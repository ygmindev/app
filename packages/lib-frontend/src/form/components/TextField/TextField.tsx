import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { ElementStateModel, RSFCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { MaskedTextField } from '@lib/frontend/form/components/MaskedTextField/MaskedTextField';
import { _TextField } from '@lib/frontend/form/components/TextField/_TextField';
import { TEXT_FIELD_KEYBOARD } from '@lib/frontend/form/components/TextField/TextField.constants';
import type {
  TextFieldPropsModel,
  TextFieldRefModel,
} from '@lib/frontend/form/components/TextField/TextField.models';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { isTranslatableText } from '@lib/frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import type { ViewStyleModel } from '@lib/frontend/style/style.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ReactElement, RefObject } from 'react';
import { forwardRef, useRef } from 'react';

export const TextField: RSFCModel<TextFieldRefModel, TextFieldPropsModel> = forwardRef(
  (
    {
      defaultValue,
      elementState,
      error,
      isAutoFocus,
      isCenter,
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
    },
    ref,
  ) => {
    const _ref = useRef<TextFieldRefModel>(null);
    const { t } = useTranslation();
    const theme = useTheme();
    const { fieldValue, setFieldValue } = useFieldValue({ defaultValue, onChange, value });

    const _rightElement = (elementState?: ElementStateModel): ReactElement => (
      <Wrapper
        isRowAlign
        pRight={isCenter ? undefined : THEME_BASIC_SIZE.SMALL}>
        {fieldValue && !isNoClear && elementState !== ELEMENT_STATE.DISABLED && (
          <Appearable
            isCenter
            isVisible={elementState === ELEMENT_STATE.ACTIVE && fieldValue.length > 0}>
            <Button
              icon="times"
              onPress={() => _handleChange('')}
              type={BUTTON_TYPE.ICON}
            />
          </Appearable>
        )}

        {isTranslatableText(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

        {rightElement && rightElement(elementState)}
      </Wrapper>
    );

    const isMounted = useMount(
      {
        onMount: () =>
          isAutoFocus &&
          sleep({ duration: theme.animation.transition }).then(() => {
            if (isMounted) {
              const inputRef = (ref || _ref) as RefObject<TextFieldRefModel>;
              inputRef.current && inputRef.current.focus();
            }
          }),
      },
      [ref, isAutoFocus, theme.animation.transition],
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
            ? ({ style, ...inputProps }) => (
                <MaskedTextField
                  {...inputProps}
                  mask={mask}
                  style={style as ViewStyleModel}
                />
              )
            : undefined
        }
        elementState={elementState}
        error={isTranslatableText(error) && t(error)}
        height={label ? theme.shape.height.l : theme.shape.height.m}
        isCenter={isCenter}
        keyboard={keyboard}
        label={label && t(label)}
        leftElement={leftElement}
        onBlur={onBlur}
        onChange={_handleChange}
        onEscape={isNoClear ? undefined : () => _handleChange('')}
        onFocus={onFocus}
        placeholder={mask || placeholder}
        ref={ref || _ref}
        rightElement={_rightElement}
        value={fieldValue}
        width={width}
      />
    );
  },
);
