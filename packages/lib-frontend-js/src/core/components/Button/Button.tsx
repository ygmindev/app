import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import {
  type ButtonPropsModel,
  type ButtonRefModel,
} from '@lib/frontend/core/components/Button/Button.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import { useMemo } from 'react';

export const Button: RLFCModel<ButtonRefModel, ButtonPropsModel> = ({
  align = FLEX_ALIGN.CENTER,
  casing = TEXT_CASING.CAPITALIZE,
  children,
  color = THEME_COLOR.PRIMARY,
  description,
  elementState,
  fontAlign = FONT_ALIGN.CENTER,
  height,
  icon,
  iconText,
  imageSrc,
  isShadow,
  leftElement,
  onElementStateChange,
  rightElement,
  s,
  size = THEME_SIZE.MEDIUM,
  tooltip,
  type = BUTTON_TYPE.FILLED,
  ...props
}) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props: { ...props, isShadow } });

  const { elementStateControlled, elementStateControlledSet, isActive, isLoading } =
    useElementStateControlled({ elementState, onElementStateChange });

  const heightF = isNumber(height) ? height : (height ?? theme.shape.size[size as THEME_SIZE]);

  const isIconOnly = icon && !children;

  const { borderAnimation, childColor, childColorRole, containerAnimation } = useMemo<{
    borderAnimation?: AnimationModel;
    childColor?: THEME_COLOR | string;
    childColorRole?: THEME_ROLE;
    containerAnimation?: AnimationModel;
  }>(() => {
    const colorF = theme.color.palette[color];
    const opacity = theme.opaque[THEME_SIZE.SMALL];
    const activeColor = colorF[THEME_ROLE.ACTIVE];
    const mainColor = colorF[THEME_ROLE.MAIN];
    const surfaceColor = theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN];
    const contrastColor = theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST];
    switch (type) {
      case BUTTON_TYPE.FILLED: {
        return {
          borderAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: { borderColor: activeColor },
              [ELEMENT_STATE.DISABLED]: { borderColor: activeColor },
              [ELEMENT_STATE.LOADING]: { borderColor: activeColor },
              [ELEMENT_STATE.INACTIVE]: { borderColor: mainColor },
            },
          },
          childColorRole: THEME_ROLE.CONTRAST,
          containerAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                backgroundColor: activeColor,
                opacity: 1,
              },
              [ELEMENT_STATE.DISABLED]: {
                backgroundColor: activeColor,
                opacity,
              },
              [ELEMENT_STATE.LOADING]: {
                backgroundColor: activeColor,
                opacity,
              },
              [ELEMENT_STATE.INACTIVE]: {
                backgroundColor: mainColor,
                opacity: 1,
              },
            },
          },
        };
      }
      case BUTTON_TYPE.INVISIBLE:
      case BUTTON_TYPE.TRANSPARENT: {
        return {
          borderAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: { borderColor: mainColor },
              [ELEMENT_STATE.DISABLED]: { borderColor: mainColor },
              [ELEMENT_STATE.LOADING]: { borderColor: mainColor },
              [ELEMENT_STATE.INACTIVE]: { borderColor: mainColor },
            },
          },
          childColorRole: THEME_ROLE.MAIN,
          containerAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                backgroundColor: colorF[THEME_ROLE.MUTED],
                opacity: 1,
              },
              [ELEMENT_STATE.DISABLED]: {
                backgroundColor: surfaceColor,
                opacity,
              },
              [ELEMENT_STATE.LOADING]: {
                backgroundColor: surfaceColor,
                opacity,
              },
              [ELEMENT_STATE.INACTIVE]: {
                backgroundColor: surfaceColor,
                opacity: 1,
              },
            },
          },
        };
      }
      case BUTTON_TYPE.BORDERED: {
        return {
          borderAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                borderColor: mainColor,
                borderWidth: 1.5,
              },
              [ELEMENT_STATE.DISABLED]: {
                borderColor: contrastColor,
                borderWidth: 1,
              },
              [ELEMENT_STATE.LOADING]: {
                borderColor: contrastColor,
                borderWidth: 1,
              },
              [ELEMENT_STATE.INACTIVE]: {
                borderColor: contrastColor,
                borderWidth: 1,
              },
            },
          },
          // childColor: isActive ? activeColor : contrastColor,
          childColorRole: THEME_ROLE.MAIN,
          containerAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                backgroundColor: surfaceColor,
                opacity: 1,
              },
              [ELEMENT_STATE.DISABLED]: {
                backgroundColor: surfaceColor,
                opacity,
              },
              [ELEMENT_STATE.LOADING]: {
                backgroundColor: surfaceColor,
                opacity,
              },
              [ELEMENT_STATE.INACTIVE]: {
                backgroundColor: surfaceColor,
                opacity: 1,
              },
            },
          },
        };
      }
      default:
        return {};
    }
  }, [color, theme, type]);
  const colorF = childColor ?? color;

  let childrenF = isAsyncText(children) ? (
    <AsyncText
      align={fontAlign}
      casing={casing}
      color={colorF}
      colorRole={childColorRole}
      fontSize={THEME_SIZE.SMALL}
      isEllipsis
      isFullWidth>
      {children}
    </AsyncText>
  ) : (
    children
  );

  const iconF = icon ? (
    <Wrapper
      isCenter
      width={isIconOnly ? undefined : theme.shape.size[THEME_SIZE_MORE.XSMALL]}>
      <Icon
        color={colorF}
        colorRole={childColorRole}
        icon={icon}
        iconText={iconText}
      />
    </Wrapper>
  ) : undefined;

  childrenF = childrenF ? (
    <Wrapper
      align={align}
      isRow
      s={s ?? THEME_SIZE.SMALL}>
      {isFunction(leftElement) ? leftElement(isActive) : leftElement}

      {iconF}

      {imageSrc && (
        <Image
          height={theme.shape.height[THEME_SIZE_MORE.XSMALL]}
          src={imageSrc}
        />
      )}

      {childrenF}

      {isFunction(rightElement) ? rightElement(isActive) : rightElement}
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
      animation={containerAnimation}
      confirmColor={color}
      elementState={elementStateControlled}
      height={heightF}
      isOverflowHidden
      justify={FLEX_JUSTIFY.CENTER}
      onElementStateChange={elementStateControlledSet}
      position={SHAPE_POSITION.RELATIVE}
      round={isIconOnly ? heightF / 2 : true}
      tooltip={tooltip}
      width={props.width ?? (children ? undefined : heightF)}>
      <>
        <Wrapper
          animation={borderAnimation}
          border={type === BUTTON_TYPE.TRANSPARENT}
          borderRole={THEME_ROLE.MAIN}
          elementState={elementStateControlled}
          isAbsoluteFill
          round={isIconOnly ? heightF / 2 : true}
        />

        <Appearable
          isActive={!isLoading}
          isFullWidth={!isIconOnly}
          isLazy={false}>
          {childrenF}
        </Appearable>

        <Appearable
          isAbsoluteFill
          isActive={isLoading}
          isCenter
          isOverflowHidden>
          <Loading
            color={colorF}
            colorRole={childColorRole}
          />
        </Appearable>
      </>
    </Pressable>
  );
};
