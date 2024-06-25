import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import {
  type ButtonPropsModel,
  type ButtonRefModel,
} from '@lib/frontend/core/components/Button/Button.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { type ThemeRoleModel, type ThemeSizeModel } from '@lib/frontend/style/style.models';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import isNumber from 'lodash/isNumber';
import { forwardRef, useMemo } from 'react';

export const Button: RLFCModel<ButtonRefModel, ButtonPropsModel> = forwardRef(
  (
    {
      align = FLEX_ALIGN.CENTER,
      children,
      color = THEME_COLOR.PRIMARY,
      description,
      elementState,
      height,
      icon,
      iconText,
      isShadow,
      leftElement,
      onElementStateChange,
      rightElement,
      size = THEME_SIZE.MEDIUM,
      type,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const { wrapperProps } = useLayoutStyles({ props: { ...props, isShadow } });

    const { elementStateControlled, elementStateControlledSet, isLoading } =
      useElementStateControlled({ elementState, onElementStateChange });

    const heightF = isNumber(height) ? height : height ?? theme.shape.size[size as ThemeSizeModel];
    const isIconOnly = icon && !children;
    const typeF = type ?? (isIconOnly && !isShadow ? BUTTON_TYPE.INVISIBLE : BUTTON_TYPE.FILLED);

    const { animation, childColorRole } = useMemo<{
      animation?: AnimationModel;
      childColorRole?: ThemeRoleModel;
    }>(() => {
      const colorF = theme.color.palette[color];
      const opacity = theme.opaque[THEME_SIZE.LARGE];
      const activeColor = colorF[THEME_ROLE.ACTIVE];
      const mainColor = colorF[THEME_ROLE.MAIN];
      switch (typeF) {
        case BUTTON_TYPE.FILLED: {
          return {
            animation: {
              states: {
                [ELEMENT_STATE.ACTIVE]: {
                  backgroundColor: activeColor,
                  borderColor: activeColor,
                  opacity: 1,
                },
                [ELEMENT_STATE.DISABLED]: {
                  backgroundColor: activeColor,
                  borderColor: activeColor,
                  opacity,
                },
                [ELEMENT_STATE.LOADING]: {
                  backgroundColor: activeColor,
                  borderColor: activeColor,
                  opacity,
                },
                [ELEMENT_STATE.INACTIVE]: {
                  backgroundColor: mainColor,
                  borderColor: mainColor,
                  opacity: 1,
                },
              },
            },
            childColorRole: THEME_ROLE.CONTRAST,
          };
        }
        case BUTTON_TYPE.INVISIBLE:
        case BUTTON_TYPE.TRANSPARENT: {
          const colorInactive = theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN];
          return {
            animation: {
              states: {
                [ELEMENT_STATE.ACTIVE]: {
                  backgroundColor: colorF.muted,
                  borderColor: mainColor,
                  opacity: 1,
                },
                [ELEMENT_STATE.DISABLED]: {
                  backgroundColor: colorInactive,
                  borderColor: mainColor,
                  opacity,
                },
                [ELEMENT_STATE.LOADING]: {
                  backgroundColor: colorInactive,
                  borderColor: mainColor,
                  opacity,
                },
                [ELEMENT_STATE.INACTIVE]: {
                  backgroundColor: colorInactive,
                  borderColor: mainColor,
                  opacity: 1,
                },
              },
            },
            childColorRole: THEME_ROLE.MAIN,
          };
        }
        default:
          return {};
      }
    }, [color, theme, typeF]);

    let childrenF = children && (
      <AsyncText
        align={FONT_ALIGN.CENTER}
        color={color}
        colorRole={childColorRole}
        fontSize={THEME_SIZE.SMALL}
        isEllipsis
        isFullWidth>
        {children}
      </AsyncText>
    );

    const iconF = icon ? (
      <Icon
        align={FONT_ALIGN.CENTER}
        color={color}
        colorRole={childColorRole}
        icon={icon}
        iconText={iconText}
        width={isIconOnly ? undefined : theme.shape.size[THEME_SIZE_MORE.XSMALL]}
      />
    ) : undefined;

    childrenF = childrenF ? (
      <Wrapper
        isAlign
        isRow>
        {leftElement}

        {iconF}

        {childrenF}

        {rightElement}
      </Wrapper>
    ) : (
      iconF
    );

    description &&
      (childrenF = (
        <Wrapper>
          {childrenF}

          <AsyncText
            align={FONT_ALIGN.CENTER}
            color={color}
            colorRole={childColorRole}
            fontSize={THEME_SIZE_MORE.XSMALL}
            isEllipsis
            isFullWidth>
            {description}
          </AsyncText>
        </Wrapper>
      ));
    return (
      <Pressable
        {...wrapperProps}
        align={align}
        animation={animation}
        border={typeF !== BUTTON_TYPE.INVISIBLE}
        borderRole={THEME_ROLE.MAIN}
        confirmColor={color}
        elementState={elementStateControlled}
        height={heightF}
        isOverflowHidden
        justify={FLEX_JUSTIFY.CENTER}
        onElementStateChange={elementStateControlledSet}
        position={SHAPE_POSITION.RELATIVE}
        ref={ref}
        round={isIconOnly ? heightF / 2 : true}
        width={props.width ?? (children ? undefined : heightF)}>
        <>
          <Appearable
            isActive={!isLoading}
            isFullWidth={!isIconOnly}>
            {childrenF}
          </Appearable>

          <Appearable
            isAbsoluteFill
            isActive={isLoading}
            isCenter>
            <Loading
              color={color}
              colorRole={childColorRole}
            />
          </Appearable>
        </>
      </Pressable>
    );
  },
);
