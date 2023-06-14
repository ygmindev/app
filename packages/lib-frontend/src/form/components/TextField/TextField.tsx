import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Tooltip } from '#lib-frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import type { ElementStateModel, RSFCModel } from '#lib-frontend/core/core.models';
import { MaskedTextField } from '#lib-frontend/form/components/MaskedTextField/MaskedTextField';
import { _TextField } from '#lib-frontend/form/components/TextField/_TextField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import type {
  TextFieldPropsModel,
  TextFieldRefModel,
} from '#lib-frontend/form/components/TextField/TextField.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import type { ViewStyleModel } from '#lib-frontend/style/style.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';
import type { RefObject } from 'react';
import { forwardRef, useEffect, useRef } from 'react';

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
      onElementStateChange,
      onFocus,
      placeholder,
      rightElement,
      value,
      width,
      ...props
    },
    ref,
  ) => {
    const refF = useRef<TextFieldRefModel>(null);
    const { t } = useTranslation();
    const theme = useTheme();
    const { valueControlled, valueControlledSet } = useControlledValue({
      defaultValue,
      onChange,
      value,
    });
    const {
      valueControlled: elementStateControlled,
      valueControlledSet: setElementStateControlled,
    } = useControlledValue<ElementStateModel>({
      defaultValue: ELEMENT_STATE.INACTIVE,
      onChange: onElementStateChange,
      value: elementState,
    });

    const rightElementF = (
      <Wrapper
        isRowAlign
        pRight={isCenter ? undefined : THEME_SIZE.SMALL}>
        {!isNoClear && (
          <Appearable
            elementState={elementStateControlled}
            isCenter
            isVisible={
              !!valueControlled &&
              valueControlled.length > 0 &&
              elementStateControlled === ELEMENT_STATE.ACTIVE
            }>
            <Button
              icon="times"
              onPress={() => handleChange('')}
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Appearable>
        )}

        {isTranslatableText(error) && <Tooltip color={THEME_COLOR.ERROR}>{error}</Tooltip>}

        {rightElement}
      </Wrapper>
    );

    useEffect(() => {
      isAutoFocus &&
        sleep({ duration: theme.animation.transition }).then(() => {
          const inputRef = (ref || refF) as RefObject<TextFieldRefModel>;
          inputRef.current && inputRef.current.focus();
        });
    }, [isAutoFocus, theme.animation.transition]);

    const handleChange = (newValue: string): void => {
      switch (keyboard) {
        case TEXT_FIELD_KEYBOARD.NUMBER:
        case TEXT_FIELD_KEYBOARD.TEL: {
          if (/^\d*$/.test(newValue)) {
            valueControlledSet(newValue);
          }
          break;
        }
        case TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE: {
          if (/^([1-9]+\d*)?$/.test(newValue)) {
            valueControlledSet(newValue);
          }
          break;
        }
        case TEXT_FIELD_KEYBOARD.DECIMAL: {
          if (/^\d*\.?\d*$/.test(newValue)) {
            valueControlledSet(newValue);
          }
          break;
        }
        default: {
          valueControlledSet(newValue);
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
        elementState={elementStateControlled}
        error={isTranslatableText(error) ? t(error) : error}
        height={label ? theme.shape.height.l : theme.shape.height.m}
        isCenter={isCenter}
        keyboard={keyboard}
        label={label && t(label)}
        leftElement={leftElement}
        onBlur={onBlur}
        onChange={handleChange}
        onElementStateChange={setElementStateControlled}
        onEscape={isNoClear ? undefined : () => handleChange('')}
        onFocus={onFocus}
        placeholder={mask || placeholder}
        ref={ref || refF}
        rightElement={rightElementF}
        value={valueControlled}
        width={width}
      />
    );
  },
);

process.env.APP_DEBUG && (TextField.displayName = variableName({ TextField }));
