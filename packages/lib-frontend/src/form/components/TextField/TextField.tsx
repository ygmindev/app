import { type RefObject } from 'react';
import { forwardRef, useRef } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Tooltip } from '#lib-frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type ElementStateModel, type RSFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { MaskedTextField } from '#lib-frontend/form/components/MaskedTextField/MaskedTextField';
import { _TextField } from '#lib-frontend/form/components/TextField/_TextField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import {
  type TextFieldPropsModel,
  type TextFieldRefModel,
} from '#lib-frontend/form/components/TextField/TextField.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type ViewStyleModel } from '#lib-frontend/style/style.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

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
      value: elementState || undefined,
    });

    const heightF = label
      ? theme.shape.size[THEME_SIZE.LARGE]
      : theme.shape.size[THEME_SIZE.MEDIUM];

    const rightElementF = (
      <Wrapper
        isRowAlign
        pRight={isCenter ? undefined : THEME_SIZE.SMALL}>
        {!isNoClear && (
          <Appearable
            elementState={elementStateControlled}
            isActive={
              !!valueControlled &&
              valueControlled.length > 0 &&
              elementStateControlled === ELEMENT_STATE.ACTIVE
            }
            isCenter>
            <Button
              height={heightF - theme.shape.spacing[THEME_SIZE.SMALL]}
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

    useAsync(async (isMounted) => {
      if (isAutoFocus) {
        await sleep(theme.animation.transition);
        if (isMounted()) {
          const inputRef = (ref || refF) as RefObject<TextFieldRefModel>;
          inputRef.current && inputRef.current.focus();
        }
      }
    });

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
        height={heightF}
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
        ref={ref ?? refF}
        rightElement={rightElementF}
        value={valueControlled}
        width={width}
      />
    );
  },
);

process.env.APP_IS_DEBUG && (TextField.displayName = variableName({ TextField }));
