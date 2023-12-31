import isNumber from 'lodash/isNumber';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import { ANIMATION_STATES_FOCUSABLE } from '#lib-frontend/animation/animation.constants';
import { type AnimationModel } from '#lib-frontend/animation/animation.models';
import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Tooltip } from '#lib-frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type ElementStateModel, type RLFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { FocusableWrapper } from '#lib-frontend/data/components/FocusableWrapper/FocusableWrapper';
import { type FocusableRefModel } from '#lib-frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import { _TextField } from '#lib-frontend/data/components/TextField/_TextField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/data/components/TextField/TextField.constants';
import {
  type TextFieldPropsModel,
  type TextFieldRefModel,
} from '#lib-frontend/data/components/TextField/TextField.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '#lib-frontend/style/style.constants';
import { type TextStyleModel } from '#lib-frontend/style/style.models';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const TextField: RLFCModel<TextFieldRefModel, TextFieldPropsModel> = forwardRef(
  (
    {
      autoComplete,
      beforeSubmit,
      defaultValue,
      icon,
      isAutoFocus,
      isCenter,
      isNoClear,
      isTransparent,
      keyboard,
      label,
      language,
      leftElement,
      maxLength,
      minWidth,
      numberOfLines,
      onBlur,
      onChange,
      onEscape,
      onFocus,
      onRemove,
      onSubmit,
      placeholder,
      rightElement,
      size,
      value,
      width,
      ...props
    },
    ref,
  ) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const focusableRef = useRef<FocusableRefModel>(null);
    const inputRef = useRef<TextFieldRefModel>(null);

    useImperativeHandle(ref, () => ({
      beforeSubmit,
      blur: () => inputRef.current?.blur(),
      focus: () => inputRef.current?.focus(),
    }));

    const [elementState, elementStateSet] = useState<ElementStateModel>();
    const elementStateF = props.elementState ?? elementState;
    const sizeF = size ?? (label ? THEME_SIZE.MEDIUM : THEME_SIZE.SMALL);

    const theme = useTheme();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    useAsync(async (isMounted) => {
      if (isAutoFocus) {
        await sleep(theme.animation.transition);
        if (isMounted()) {
          inputRef.current && inputRef.current.focus();
        }
      }
    });

    const leftElementF = leftElement && <Wrapper isRowAlign>{leftElement}</Wrapper>;

    const rightElementF = (
      <Wrapper
        bottom={0}
        isRowAlign
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        top={0}>
        {!isNoClear && (
          <Appearable
            elementState={elementStateF}
            isActive={elementStateF === ELEMENT_STATE.ACTIVE}
            isCenter>
            <Button
              icon="times"
              onPress={() => handleChange('')}
              size={THEME_SIZE.SMALL}
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Appearable>
        )}

        {isTranslatableText(props.error) && (
          <Tooltip color={THEME_COLOR.ERROR}>{props.error}</Tooltip>
        )}

        {rightElement}
      </Wrapper>
    );

    const handleChange = (v: string): void => {
      switch (keyboard) {
        case TEXT_FIELD_KEYBOARD.NUMBER:
        case TEXT_FIELD_KEYBOARD.TEL: {
          if (/^\d*$/.test(v)) {
            valueControlledSet(v);
          }
          break;
        }
        case TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE: {
          if (/^([0-9]+\d*)?$/.test(v)) {
            valueControlledSet(v);
          }
          break;
        }
        case TEXT_FIELD_KEYBOARD.DECIMAL: {
          if (/^\d*\.?\d*$/.test(v)) {
            valueControlledSet(v);
          }
          break;
        }
        default: {
          valueControlledSet(v);
          break;
        }
      }
    };

    const isError = !!props.error;
    const containerAnimation: AnimationModel = {
      states: {
        [ELEMENT_STATE.INACTIVE]: {
          height: valueControlled
            ? theme.shape.size[THEME_SIZE.SMALL]
            : theme.shape.size[THEME_SIZE.MEDIUM],
        },
        [ELEMENT_STATE.ACTIVE]: { height: theme.shape.size[THEME_SIZE.SMALL] },
      },
    };
    const textAnimation: AnimationModel<TextStyleModel> = {
      states: merge([
        {
          [ELEMENT_STATE.INACTIVE]: {
            fontSize: valueControlled
              ? theme.font.size[THEME_SIZE_MORE.XSMALL]
              : theme.font.size[THEME_SIZE.MEDIUM],
          },
          [ELEMENT_STATE.ACTIVE]: { fontSize: theme.font.size[THEME_SIZE_MORE.XSMALL] },
        },
        ANIMATION_STATES_FOCUSABLE({ isError, isText: true, theme }),
      ]),
    };

    const isDisabled =
      elementStateF === ELEMENT_STATE.DISABLED || elementStateF === ELEMENT_STATE.LOADING;

    return (
      <FocusableWrapper
        {...wrapperProps}
        border={!isTransparent}
        elementState={elementStateF}
        height={isNumber(sizeF) ? sizeF : theme.shape.size[sizeF]}
        onElementStateChange={elementStateSet}
        pHorizontal
        position={SHAPE_POSITION.RELATIVE}
        ref={focusableRef}
        width={width}>
        <Wrapper
          align={label ? FLEX_ALIGN.END : FLEX_ALIGN.CENTER}
          flex
          isRow
          position={SHAPE_POSITION.RELATIVE}
          s={THEME_SIZE.SMALL}>
          {leftElementF}

          <_TextField
            autoComplete={autoComplete}
            foregroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
            height={theme.shape.size[THEME_SIZE.SMALL]}
            isCenter={isCenter}
            isDisabled={isDisabled}
            keyboard={keyboard}
            language={language}
            maxLength={maxLength}
            numberOfLines={numberOfLines}
            onBlur={() => {
              if (!isDisabled) {
                onBlur && onBlur();
                void sleep(100).then(() => focusableRef?.current?.blur());
              }
            }}
            onChange={handleChange}
            onEscape={() => {
              if (!isNoClear) {
                handleChange('');
                onEscape && onEscape();
              }
            }}
            onFocus={() => {
              if (!isDisabled) {
                onFocus && onFocus();
                focusableRef?.current?.focus();
              }
            }}
            onRemove={onRemove}
            onSubmit={onSubmit}
            placeholder={placeholder}
            ref={inputRef}
            value={valueControlled}
          />

          {rightElementF}
        </Wrapper>

        {/* TODO: to item? */}
        <Wrapper
          animation={containerAnimation}
          elementState={placeholder ? ELEMENT_STATE.ACTIVE : elementStateF}
          isCenter
          isRowAlign
          left={0}
          pHorizontal
          position={SHAPE_POSITION.ABSOLUTE}
          zIndex={-1}>
          {icon && (
            <Icon
              animation={textAnimation}
              elementState={elementStateF}
              icon={icon}
            />
          )}

          {label && (
            <TranslatableText
              animation={textAnimation}
              elementState={elementStateF}>
              {label}
            </TranslatableText>
          )}
        </Wrapper>
      </FocusableWrapper>
    );
  },
);
