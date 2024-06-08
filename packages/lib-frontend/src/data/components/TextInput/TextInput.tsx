import { ANIMATION_STATES_FOCUSABLE } from '@lib/frontend/animation/animation.constants';
import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { FocusableWrapper } from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper';
import { type FocusableRefModel } from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import { _TextInput } from '@lib/frontend/data/components/TextInput/_TextInput';
import {
  TEXT_INPUT_KEY,
  TEXT_INPUT_KEYBOARD,
} from '@lib/frontend/data/components/TextInput/TextInput.constants';
import {
  type TextInputPropsModel,
  type TextInputRefModel,
} from '@lib/frontend/data/components/TextInput/TextInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import isNumber from 'lodash/isNumber';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const TextInput: RLFCModel<TextInputRefModel, TextInputPropsModel> = forwardRef(
  (
    {
      autoComplete,
      beforeSubmit,
      defaultValue,
      elementState,
      height,
      icon,
      isCenter,
      isNoClear,
      isTransparent,
      keyboard, // TODO: keyboard type from data type
      label,
      language,
      leftElement,
      maxLength,
      numberOfLines,
      onBlur,
      onChange,
      onElementStateChange,
      onFocus,
      onKey,
      onSubmit,
      placeholder,
      rightElement,
      size,
      testID,
      value,
      width,
      ...props
    },
    ref,
  ) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const focusableRef = useRef<FocusableRefModel>(null);
    const inputRef = useRef<TextInputRefModel>(null);

    useImperativeHandle(ref, () => ({
      beforeSubmit,
      blur: () => handleFocus(false),
      focus: () => handleFocus(true),
      submit: inputRef.current?.submit,
    }));

    const { valueControlled: elementStateF, valueControlledSet: onElementStateChangeF } =
      useValueControlled({
        onChange: onElementStateChange,
        value: elementState,
      });

    const sizeF = size ?? THEME_SIZE.MEDIUM;
    const isDisabled =
      elementStateF === ELEMENT_STATE.DISABLED || elementStateF === ELEMENT_STATE.LOADING;

    const isActive = elementStateF === ELEMENT_STATE.ACTIVE;

    const theme = useTheme();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const handleFocus = async (v?: boolean): Promise<void> => {
      if (!isDisabled) {
        if (v) {
          onFocus && onFocus();
          inputRef.current?.focus && inputRef.current?.focus();
          focusableRef.current?.focus && focusableRef.current?.focus();
        } else {
          await sleep(100);
          onBlur && onBlur();
          inputRef.current?.blur && inputRef.current?.blur();
          focusableRef.current?.blur && focusableRef.current?.blur();
        }
      }
    };

    const leftElementF = leftElement && (
      <Wrapper
        isAlign
        isRow>
        {leftElement}
      </Wrapper>
    );

    const rightElementF = (
      <Wrapper
        bottom={0}
        isAlign
        isRow
        pRight={THEME_SIZE.SMALL}
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        top={0}
        zIndex>
        {!isNoClear && isActive && (
          <Appearable
            elementState={elementStateF}
            isActive={(valueControlled?.length ?? 0) > 0}
            isCenter>
            <Button
              icon="times"
              onPress={() => handleChange('')}
              size={THEME_SIZE.SMALL}
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Appearable>
        )}

        {isAsyncText(props.error) && <Tooltip color={THEME_COLOR.ERROR}>{props.error}</Tooltip>}

        {rightElement}
      </Wrapper>
    );

    const isValid = (v: string): boolean => {
      switch (keyboard) {
        case TEXT_INPUT_KEYBOARD.NUMBER:
        case TEXT_INPUT_KEYBOARD.TEL: {
          return /^\d*$/.test(v);
        }
        case TEXT_INPUT_KEYBOARD.NUMBER_POSITIVE: {
          return /^([0-9]+\d*)?$/.test(v);
        }
        case TEXT_INPUT_KEYBOARD.DECIMAL: {
          return /^\d*\.?\d*$/.test(v);
        }
        default: {
          return true;
        }
      }
    };

    const handleChange = (v: string): void => {
      isValid(v) && valueControlledSet(v);
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

    return (
      <FocusableWrapper
        {...wrapperProps}
        border={!isTransparent}
        elementState={elementStateF}
        height={height ?? (isNumber(sizeF) ? sizeF : theme.shape.size[sizeF])}
        onElementStateChange={onElementStateChangeF}
        pLeft={!isCenter}
        pRight={isCenter ? THEME_SIZE.SMALL : undefined}
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

          <_TextInput
            autoComplete={autoComplete}
            foregroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
            height={theme.shape.size[THEME_SIZE.SMALL]}
            isCenter={isCenter}
            isDisabled={isDisabled}
            keyboard={keyboard}
            language={language}
            maxLength={maxLength}
            numberOfLines={numberOfLines}
            onBlur={() => void handleFocus(false)}
            onChange={handleChange}
            onFocus={() => void handleFocus(true)}
            onKey={(key) => {
              switch (key) {
                case TEXT_INPUT_KEY.ESCAPE: {
                  !isNoClear && handleChange('');
                  break;
                }
              }
              onKey && onKey(key);
            }}
            onSubmit={onSubmit}
            placeholder={placeholder}
            ref={inputRef}
            testID={testID}
            value={valueControlled}
          />

          {rightElementF}
        </Wrapper>

        {/* TODO: to item? */}
        <Wrapper
          animation={containerAnimation}
          elementState={placeholder ? ELEMENT_STATE.ACTIVE : elementStateF}
          isAlign
          isCenter
          isRow
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
            <AsyncText
              animation={textAnimation}
              elementState={elementStateF}>
              {label}
            </AsyncText>
          )}
        </Wrapper>
      </FocusableWrapper>
    );
  },
);
