import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
// import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { ElementStateModel, SFCModel } from '@lib/frontend/core/core.models';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useMemo } from 'react';

export const Button: SFCModel<ButtonPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  type = BUTTON_TYPE.FILLED,
  icon,
  size = THEME_BASIC_SIZE.MEDIUM,
  elementState,
  onElementStateChange,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });

  const { fieldValue, setFieldValue } = useFieldValue<ElementStateModel>({
    defaultValue: ELEMENT_STATE.INACTIVE,
    onChange: onElementStateChange,
    value: elementState,
  });

  const { childrenAnimation, containerAnimation } = useMemo<{
    childrenAnimation?: AnimationModel<TextStyleModel>;
    containerAnimation?: AnimationModel;
  }>(() => {
    const _color = theme.colors.tone[color];
    const _activeColor = palette({ color: _color.main, lightness: theme.colors.activeLightness });
    const _disabledColor = palette({
      color: _color.main,
      lightness: theme.colors.disabledLightness,
    });
    switch (type) {
      case BUTTON_TYPE.FILLED: {
        return {
          childrenAnimation: {
            states: {
              [ELEMENT_STATE.INACTIVE]: { color: _color.mainContrast },
            },
          },
          containerAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: { backgroundColor: _activeColor },
              [ELEMENT_STATE.DISABLED]: { backgroundColor: _disabledColor },
              [ELEMENT_STATE.INACTIVE]: { backgroundColor: _color.main },
            },
          },
        };
      }
      case BUTTON_TYPE.ICON:
      case BUTTON_TYPE.TRANSPARENT:
        return {
          childrenAnimation: {
            states: {
              [ELEMENT_STATE.DISABLED]: { color: theme.colors.tone.neutral.mutedContrast },
              [ELEMENT_STATE.INACTIVE]: { color: _color.main },
              [ELEMENT_STATE.ACTIVE]: { color: _color.main },
            },
          },
          containerAnimation: {
            states: {
              [ELEMENT_STATE.ACTIVE]: { backgroundColor: _color.muted },
              [ELEMENT_STATE.DISABLED]: { backgroundColor: _disabledColor },
              [ELEMENT_STATE.INACTIVE]: { backgroundColor: theme.colors.tone.neutral.main },
            },
          },
        };
      default:
        return {};
    }
  }, [color, theme, type]);

  let _children = children && (
    <TranslatableText
      align={FONT_ALIGN.CENTER}
      animation={childrenAnimation}
      elementState={elementState}
      isBold
      isCapitalize>
      {children}
    </TranslatableText>
  );
  if (icon) {
    _children = (
      <Wrapper isRowAlign>
        <Icon
          animation={childrenAnimation}
          elementState={elementState}
          icon={icon}
        />

        {_children}
      </Wrapper>
    );
  }

  const _height = theme.shape.height[size];
  const _isLoading = fieldValue === ELEMENT_STATE.LOADING;

  return (
    <Pressable
      {...props}
      animation={containerAnimation}
      elementState={fieldValue}
      height={_height}
      isCenter
      onElementStateChange={setFieldValue}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      width={type === BUTTON_TYPE.ICON ? _height : undefined}>
      <>
        <Appearable
          isCenter
          isVisible={!_isLoading}>
          {_children}
        </Appearable>

        {/* <Appearable
          isAbsoluteFill
          isCenter
          isVisible={_isLoading}>
          <Loading animation={childrenAnimation} />
        </Appearable> */}
      </>
    </Pressable>
  );
};
