import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  SWITCH_INPUT_OFFSET,
  SWITCH_INPUT_WIDTH,
} from '@lib/frontend/data/components/SwitchInput/SwitchInput.constants';
import {
  type SwitchInputPropsModel,
  type SwitchInputRefModel,
} from '@lib/frontend/data/components/SwitchInput/SwitchInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { forwardRef, useMemo } from 'react';

export const SwitchInput: RLFCModel<SwitchInputRefModel, SwitchInputPropsModel> = forwardRef(
  (
    {
      defaultValue,
      elementState,
      iconActive = 'check',
      iconInactive = 'times',
      label,
      onChange,
      value,
      ...props
    },
    _,
  ) => {
    const theme = useTheme();
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled<boolean>({
      defaultValue: defaultValue ?? false,
      onChange,
      value,
    });
    const elementStateF = valueControlled
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
      const containerHeight = theme.shape.size[THEME_SIZE.SMALL];
      const childSize = containerHeight - SWITCH_INPUT_OFFSET * 2;
      return {
        childActiveLeft: SWITCH_INPUT_OFFSET + SWITCH_INPUT_WIDTH - containerHeight,
        childBorderRadius: childSize / 2,
        childSize,
        containerBorderRadius: containerHeight / 2,
        containerHeight,
        containerWidth: SWITCH_INPUT_WIDTH,
      };
    }, [theme]);

    return (
      <Wrapper
        {...wrapperProps}
        elementState={elementStateF}
        isAlign
        isRow
        onPress={() => valueControlledSet(!valueControlled)}>
        <Wrapper
          animation={{
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                backgroundColor: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
              },
              [ELEMENT_STATE.INACTIVE]: { backgroundColor: theme.color.border },
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
                [ELEMENT_STATE.INACTIVE]: { left: SWITCH_INPUT_OFFSET },
              },
            }}
            backgroundColor={THEME_COLOR_MORE.SURFACE}
            elementState={elementStateF}
            height={childSize}
            left={SWITCH_INPUT_OFFSET}
            mVertical={SWITCH_INPUT_OFFSET}
            position={SHAPE_POSITION.ABSOLUTE}
            round={childBorderRadius}
            width={childSize}>
            {iconActive && (
              <Appearable
                isAbsoluteFill
                isActive={valueControlled}>
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
                isActive={!valueControlled}>
                <Icon
                  color={THEME_COLOR_MORE.SURFACE}
                  colorRole={THEME_ROLE.MUTED}
                  icon={iconInactive}
                  m="auto"
                />
              </Appearable>
            )}
          </Wrapper>
        </Wrapper>

        {label && <AsyncText>{label}</AsyncText>}
      </Wrapper>
    );
  },
);

process.env.APP_IS_DEBUG && (SwitchInput.displayName = variableName({ SwitchInput }));
