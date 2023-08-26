import { useMemo } from 'react';

import { type AnimationModel } from '#lib-frontend/animation/animation.models';
import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { type ButtonPropsModel } from '#lib-frontend/core/components/Button/Button.models';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Loading } from '#lib-frontend/core/components/Loading/Loading';
import { Pressable } from '#lib-frontend/core/components/Pressable/Pressable';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type ElementStateModel, type SFCModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/form/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type ThemeRoleModel } from '#lib-frontend/style/style.models';
import { borderStyler } from '#lib-frontend/style/utils/styler/borderStyler/borderStyler';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_ALIGN } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Button: SFCModel<ButtonPropsModel> = ({
  align = FLEX_ALIGN.CENTER,
  children,
  color = THEME_COLOR.PRIMARY,
  elementState,
  height,
  icon,
  isShadow,
  leftElement,
  onElementStateChange,
  size = THEME_SIZE.MEDIUM,
  type,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({
    props: { ...props, isShadow },
    stylers: [borderStyler],
  });

  const { valueControlled, valueControlledSet } = useValueControlled<ElementStateModel>({
    defaultValue: ELEMENT_STATE.INACTIVE,
    onChange: onElementStateChange,
    value: elementState || undefined,
  });

  const heightF = height ?? theme.shape.size[size];
  const isLoading = valueControlled === ELEMENT_STATE.LOADING;
  const isIcon = icon && !children;
  const typeF = type ?? (isIcon ? BUTTON_TYPE.INVISIBLE : BUTTON_TYPE.FILLED);

  const { animation, childColorRole } = useMemo<{
    animation?: AnimationModel;
    childColorRole?: ThemeRoleModel;
  }>(() => {
    const colorF = theme.color.palette[color];
    const activeColor = colorF[THEME_ROLE.ACTIVE];
    switch (typeF) {
      case BUTTON_TYPE.FILLED: {
        return {
          animation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: { backgroundColor: activeColor, opacity: 1 },
              [ELEMENT_STATE.DISABLED]: { backgroundColor: activeColor, opacity: theme.opaque },
              [ELEMENT_STATE.LOADING]: { backgroundColor: activeColor, opacity: theme.opaque },
              [ELEMENT_STATE.INACTIVE]: { backgroundColor: colorF.main, opacity: 1 },
            },
          },
          childColorRole: THEME_ROLE.CONTRAST,
        };
      }
      case BUTTON_TYPE.INVISIBLE:
      case BUTTON_TYPE.TRANSPARENT: {
        const colorInactive = theme.color.palette.surface.main;
        return {
          animation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: { backgroundColor: colorF.muted, opacity: 1 },
              [ELEMENT_STATE.DISABLED]: { backgroundColor: colorInactive, opacity: theme.opaque },
              [ELEMENT_STATE.LOADING]: { backgroundColor: colorInactive, opacity: theme.opaque },
              [ELEMENT_STATE.INACTIVE]: { backgroundColor: colorInactive, opacity: 1 },
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
    <TranslatableText
      align={FONT_ALIGN.CENTER}
      color={color}
      colorRole={childColorRole}>
      {children}
    </TranslatableText>
  );
  const iconF = icon ? (
    <Icon
      color={color}
      colorRole={childColorRole}
      icon={icon}
    />
  ) : undefined;

  childrenF = childrenF ? (
    <Wrapper isRowAlign>
      {leftElement}

      {iconF}

      {childrenF}
    </Wrapper>
  ) : (
    iconF
  );

  return (
    <Pressable
      {...props}
      align={align}
      animation={animation}
      border={typeF === BUTTON_TYPE.TRANSPARENT}
      borderColor={typeF === BUTTON_TYPE.TRANSPARENT ? color : undefined}
      borderRole={THEME_ROLE.MAIN}
      elementState={valueControlled}
      height={heightF}
      justify={FLEX_JUSTIFY.CENTER}
      onElementStateChange={valueControlledSet}
      position={SHAPE_POSITION.RELATIVE}
      round={isIcon ? heightF / 2 : true}
      style={styles}
      width={children ? undefined : height}>
      <>
        <Appearable
          isActive={!isLoading}
          isScalable={false}>
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
};
