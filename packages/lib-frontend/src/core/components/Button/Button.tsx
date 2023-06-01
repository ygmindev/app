import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { ElementStateModel, SFCModel } from '@lib/frontend/core/core.models';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { ThemeRoleModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useMemo } from 'react';

export const Button: SFCModel<ButtonPropsModel> = ({
  align = FLEX_ALIGN.CENTER,
  children,
  color = THEME_COLOR.PRIMARY,
  icon,
  type = !children && icon ? BUTTON_TYPE.INVISIBLE : BUTTON_TYPE.FILLED,
  size = THEME_SIZE.MEDIUM,
  elementState,
  onElementStateChange,
  ...props
}) => {
  const theme = useTheme();

  const { valueControlled, valueControlledSet } = useControlledValue<ElementStateModel>({
    defaultValue: ELEMENT_STATE.INACTIVE,
    onChange: onElementStateChange,
    value: elementState,
  });

  const { animation, childColorRole } = useMemo<{
    animation?: AnimationModel;
    childColorRole?: ThemeRoleModel;
  }>(() => {
    const _color = theme.colors.tone[color];
    const _activeColor = palette({ color: _color.main, lightness: theme.colors.activeLightness });
    switch (type) {
      case BUTTON_TYPE.FILLED: {
        return {
          animation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: { backgroundColor: _activeColor, opacity: 1 },
              [ELEMENT_STATE.DISABLED]: {
                backgroundColor: _activeColor,
                opacity: theme.colors.disabledOpacity,
              },
              [ELEMENT_STATE.LOADING]: {
                backgroundColor: _activeColor,
                opacity: theme.colors.disabledOpacity,
              },
              [ELEMENT_STATE.INACTIVE]: { backgroundColor: _color.main, opacity: 1 },
            },
          },
          childColorRole: THEME_ROLE.MAIN_CONTRAST,
        };
      }
      case BUTTON_TYPE.INVISIBLE:
      case BUTTON_TYPE.TRANSPARENT:
        return {
          animation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                backgroundColor: _color.muted,
                opacity: 1,
              },
              [ELEMENT_STATE.DISABLED]: {
                backgroundColor: theme.colors.tone.neutral.main,
                opacity: theme.colors.disabledOpacity,
              },
              [ELEMENT_STATE.LOADING]: {
                backgroundColor: theme.colors.tone.neutral.main,
                opacity: theme.colors.disabledOpacity,
              },
              [ELEMENT_STATE.INACTIVE]: {
                backgroundColor: theme.colors.tone.neutral.main,
                opacity: 1,
              },
            },
          },
          childColorRole: THEME_ROLE.MAIN,
        };
      default:
        return {};
    }
  }, [color, theme, type]);

  let _children = children && (
    <TranslatableText
      align={FONT_ALIGN.CENTER}
      color={color}
      colorRole={childColorRole}>
      {children}
    </TranslatableText>
  );
  if (icon) {
    const _icon = (
      <Icon
        color={color}
        colorRole={childColorRole}
        icon={icon}
      />
    );
    _children = _children ? (
      <Wrapper isRowAlign>
        {_icon}

        {_children}
      </Wrapper>
    ) : (
      _icon
    );
  }

  const _height = theme.shape.height[size];
  const _isLoading = valueControlled === ELEMENT_STATE.LOADING;
  return (
    <Pressable
      {...props}
      align={align}
      animation={animation}
      border={type === BUTTON_TYPE.TRANSPARENT}
      borderColor={type === BUTTON_TYPE.TRANSPARENT ? color : undefined}
      borderRole={THEME_ROLE.MAIN}
      elementState={valueControlled}
      height={_height}
      justify={FLEX_JUSTIFY.CENTER}
      onElementStateChange={valueControlledSet}
      position={SHAPE_POSITION.RELATIVE}
      width={children ? undefined : _height}>
      <>
        <Appearable
          animation={{ isLazy: false }}
          isScalable={false}
          isVisible={!_isLoading}>
          {_children}
        </Appearable>

        <Appearable
          isAbsoluteFill
          isCenter
          isVisible={_isLoading}>
          <Loading
            color={color}
            colorRole={childColorRole}
          />
        </Appearable>
      </>
    </Pressable>
  );
};
