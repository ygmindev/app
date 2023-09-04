import { type RefObject, useState } from 'react';
import { forwardRef, useRef } from 'react';

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
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const TextField: RLFCModel<TextFieldRefModel, TextFieldPropsModel> = forwardRef(
  (
    {
      defaultValue,
      icon,
      isAutoFocus,
      isNoClear,
      isTransparent,
      label,
      leftElement,
      onBlur,
      onChange,
      onEscape,
      onFocus,
      rightElement,
      value,
      ...props
    },
    ref,
  ) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const focusableRef = useRef<FocusableRefModel>(null);
    const inputRef = useRef<TextFieldRefModel>(null);
    const inputRefF = ref ?? inputRef;
    const [elementState, elementStateSet] = useState<ElementStateModel>();

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
          const inputRef = inputRefF as RefObject<TextFieldRefModel>;
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
            elementState={elementState}
            isActive={
              !!valueControlled &&
              valueControlled.length > 0 &&
              elementState === ELEMENT_STATE.ACTIVE
            }
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
      switch (props.keyboard) {
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
    return (
      <FocusableWrapper
        {...wrapperProps}
        border={!isTransparent}
        elementState={elementState}
        height={theme.shape.size[THEME_SIZE.MEDIUM]}
        onElementStateChange={elementStateSet}
        pHorizontal
        position={SHAPE_POSITION.RELATIVE}
        ref={focusableRef}>
        <Wrapper
          align={label ? FLEX_ALIGN.FLEX_END : FLEX_ALIGN.CENTER}
          grow
          isRow
          s={THEME_SIZE.SMALL}>
          {leftElementF}

          <_TextField
            {...props}
            foregroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST]}
            height={theme.shape.size[THEME_SIZE.SMALL]}
            onBlur={() => {
              onBlur && onBlur();
              void sleep(100).then(() => focusableRef?.current?.blur());
            }}
            onChange={handleChange}
            onEscape={() => {
              if (!isNoClear) {
                handleChange('');
                onEscape && onEscape();
              }
            }}
            onFocus={() => {
              onFocus && onFocus();
              focusableRef?.current?.focus();
            }}
            ref={inputRefF}
            value={valueControlled}
          />

          {rightElementF}
        </Wrapper>

        <Wrapper
          animation={containerAnimation}
          elementState={elementState}
          isCenter
          left={0}
          pHorizontal
          position={SHAPE_POSITION.ABSOLUTE}
          zIndex={-1}>
          {icon && (
            <Icon
              animation={textAnimation}
              elementState={elementState}
              icon={icon}
            />
          )}

          {label && (
            <TranslatableText
              animation={textAnimation}
              elementState={elementState}>
              {label}
            </TranslatableText>
          )}
        </Wrapper>
      </FocusableWrapper>
    );
  },
);

process.env.APP_IS_DEBUG && (TextField.displayName = variableName({ TextField }));
