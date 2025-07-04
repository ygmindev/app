import { ANIMATION_STATES_FOCUSABLE } from '@lib/frontend/animation/animation.constants';
import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { TooltipIcon } from '@lib/frontend/core/components/TooltipIcon/TooltipIcon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
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
} from '@lib/frontend/style/style.constants';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import isNumber from 'lodash/isNumber';
import { useImperativeHandle, useRef } from 'react';

export const TextInput: RLFCModel<TextInputRefModel, TextInputPropsModel> = ({
  autoComplete,
  beforeSubmit,
  defaultValue,
  elementState,
  height,
  icon,
  isCenter,
  isClearable = true,
  isRightElementFixed = true,
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
  ref,
  rightElement,
  size,
  testID,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const focusableRef = useRef<FocusableRefModel>(null);
  const inputRef = useRef<TextInputRefModel>(null);

  useImperativeHandle(ref, () => ({
    beforeSubmit,
    blur: () => handleFocus(false),
    focus: () => handleFocus(true),
    submit: inputRef.current?.submit,
  }));

  const { elementStateControlled, elementStateControlledSet, isActive, isBlocked } =
    useElementStateControlled({
      elementState,
      onElementStateChange,
    });

  const sizeF = size ?? THEME_SIZE.MEDIUM;

  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const handleFocus = async (v?: boolean): Promise<void> => {
    !v && (await sleepForEffect());
    if (!isBlocked) {
      if (v) {
        onFocus?.();
        focusableRef.current?.focus && focusableRef.current?.focus();
        inputRef.current?.focus?.();
        elementStateControlledSet(ELEMENT_STATE.ACTIVE);
      } else {
        onBlur?.();
        focusableRef.current?.blur && focusableRef.current?.blur();
        inputRef.current?.blur?.();
        elementStateControlledSet(ELEMENT_STATE.INACTIVE);
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
      pRight
      position={isRightElementFixed || isCenter ? SHAPE_POSITION.ABSOLUTE : undefined}
      right={0}
      top={0}
      zIndex>
      {isClearable && (
        <Appearable
          elementState={elementStateControlled}
          isActive={isActive && (valueControlled?.length ?? 0) > 0}
          isCenter
          isLazy={false}>
          <Button
            icon="times"
            onPress={() => handleChange('')}
            size={THEME_SIZE.SMALL}
            type={BUTTON_TYPE.INVISIBLE}
          />
        </Appearable>
      )}

      {isAsyncText(props.error) && (
        <TooltipIcon color={THEME_COLOR.ERROR}>{props.error}</TooltipIcon>
      )}

      {rightElement}
    </Wrapper>
  );

  const isValid = (v: string): boolean => {
    switch (keyboard) {
      case TEXT_INPUT_KEYBOARD.NUMBER:
      case TEXT_INPUT_KEYBOARD.TELEPHONE: {
        return /^\d*\.?\d*$/.test(v);
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
        transform: [{ scale: valueControlled ? theme.shape.scaling[THEME_SIZE.MEDIUM] : 1.0 }],
      },
      [ELEMENT_STATE.ACTIVE]: {
        height: theme.shape.size[THEME_SIZE.SMALL],
        transform: [{ scale: theme.shape.scaling[THEME_SIZE.MEDIUM] }],
      },
    },
  };

  const textAnimation: AnimationModel<TextStyleModel> = {
    states: ANIMATION_STATES_FOCUSABLE({ isError, isText: true, theme }),
  };

  return (
    <FocusableWrapper
      {...wrapperProps}
      border={!isTransparent}
      elementState={elementStateControlled}
      height={height ?? (isNumber(sizeF) ? sizeF : theme.shape.size[sizeF])}
      isRow
      isTransparent={isTransparent}
      onElementStateChange={elementStateControlledSet}
      pLeft={!isCenter}
      position={SHAPE_POSITION.RELATIVE}
      ref={focusableRef}
      s={THEME_SIZE.SMALL}>
      {leftElementF}

      <Wrapper
        bottom={0}
        flex
        left={0}
        position={isCenter ? SHAPE_POSITION.ABSOLUTE : SHAPE_POSITION.RELATIVE}
        right={0}
        top={0}>
        {/* TODO: to item? */}
        <Wrapper
          animation={containerAnimation}
          elementState={elementStateControlled}
          isAlign
          isCenter
          isRow
          left={0}
          position={SHAPE_POSITION.ABSOLUTE}
          right={isCenter ? 0 : undefined}
          style={isCenter ? { transformOrigin: 'top' } : { transformOrigin: `0px 0px` }}
          zIndex={-1}>
          {icon && (
            <Icon
              icon={icon}
              style={elementStateControlled && textAnimation.states?.[elementStateControlled]}
            />
          )}

          {label && (
            <AsyncText
              animation={textAnimation}
              casing={TEXT_CASING.CAPITALIZE}
              elementState={elementStateControlled}>
              {label}
            </AsyncText>
          )}
        </Wrapper>

        <Wrapper
          align={label ? FLEX_ALIGN.END : FLEX_ALIGN.CENTER}
          flex
          isRow>
          <_TextInput
            autoComplete={autoComplete}
            foregroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
            height={theme.shape.size[THEME_SIZE.SMALL]}
            isCenter={isCenter}
            isDisabled={isBlocked}
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
                  isClearable && handleChange('');
                  break;
                }
              }
              onKey && onKey(key);
            }}
            onSubmit={onSubmit}
            placeholder={isActive ? placeholder : undefined}
            ref={inputRef}
            testID={testID}
            value={valueControlled}
          />
        </Wrapper>
      </Wrapper>

      {rightElementF}
    </FocusableWrapper>
  );
};
