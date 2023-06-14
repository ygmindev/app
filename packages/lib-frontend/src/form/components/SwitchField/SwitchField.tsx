import { useMemo } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import type { SFCModel } from '#lib-frontend/core/core.models';
import {
  SWITCH_FIELD_OFFSET,
  SWITCH_FIELD_WIDTH,
} from '#lib-frontend/form/components/SwitchField/SwitchField.constants';
import type { SwitchFieldPropsModel } from '#lib-frontend/form/components/SwitchField/SwitchField.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const SwitchField: SFCModel<SwitchFieldPropsModel> = ({
  defaultValue,
  elementState,
  iconActive = 'check',
  iconInactive = 'times',
  label,
  onChange,
  testID,
  value,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const { valueControlled, valueControlledSet } = useControlledValue<'true' | 'false'>({
    defaultValue: defaultValue || 'false',
    onChange,
    value,
  });
  const elementStateF =
    valueControlled === 'true'
      ? ELEMENT_STATE.ACTIVE
      : elementState === ELEMENT_STATE.DISABLED || elementState === ELEMENT_STATE.LOADING
      ? ELEMENT_STATE.DISABLED
      : ELEMENT_STATE.INACTIVE;

  const {
    childActiveLeft,
    childBorderRadius,
    childSize,
    containerBorderRadius,
    containerHeight,
    containerWidth,
  } = useMemo(() => {
    const containerHeight = theme.shape.height.s;
    const childSize = theme.shape.height.s - SWITCH_FIELD_OFFSET * 2;
    return {
      childActiveLeft: SWITCH_FIELD_OFFSET + SWITCH_FIELD_WIDTH - theme.shape.height.s,
      childBorderRadius: childSize / 2,
      childSize,
      containerBorderRadius: containerHeight / 2,
      containerHeight,
      containerWidth: SWITCH_FIELD_WIDTH,
    };
  }, [theme]);

  return (
    <Wrapper
      elementState={elementStateF}
      isRowAlign
      onPress={() => valueControlledSet(valueControlled === 'true' ? 'false' : 'true')}
      style={styles}
      testID={testID}>
      <Wrapper
        animation={{
          states: {
            [ELEMENT_STATE.ACTIVE]: { backgroundColor: theme.colors.tone.primary.main },
            [ELEMENT_STATE.INACTIVE]: { backgroundColor: theme.colors.tone.neutral.muted },
          },
        }}
        elementState={elementStateF}
        height={containerHeight}
        position={SHAPE_POSITION.RELATIVE}
        round={containerBorderRadius}
        width={containerWidth}>
        <Wrapper
          animation={{
            states: {
              [ELEMENT_STATE.ACTIVE]: { left: childActiveLeft },
              [ELEMENT_STATE.INACTIVE]: { left: SWITCH_FIELD_OFFSET },
            },
          }}
          backgroundColor={THEME_COLOR.NEUTRAL}
          elementState={elementStateF}
          height={childSize}
          left={SWITCH_FIELD_OFFSET}
          mVertical={SWITCH_FIELD_OFFSET}
          position={SHAPE_POSITION.ABSOLUTE}
          round={childBorderRadius}
          width={childSize}>
          {iconActive && (
            <Appearable
              isAbsoluteFill
              isVisible={valueControlled === 'true'}>
              <Icon
                color={THEME_COLOR.PRIMARY}
                icon={iconActive}
                m="auto"
              />
            </Appearable>
          )}

          {iconInactive && (
            <Appearable
              isAbsoluteFill
              isVisible={valueControlled === 'false'}>
              <Icon
                color={THEME_COLOR.NEUTRAL}
                colorRole={THEME_ROLE.MUTED}
                icon={iconInactive}
                m="auto"
              />
            </Appearable>
          )}
        </Wrapper>
      </Wrapper>

      {label && <TranslatableText>{label}</TranslatableText>}
    </Wrapper>
  );
};
