import { type ReactElement } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type RadioFieldPropsModel } from '#lib-frontend/core/components/RadioField/RadioField.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCPropsModel } from '#lib-frontend/core/core.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const RadioField = <TType extends string = string>({
  color = THEME_COLOR.PRIMARY,
  defaultValue,
  elementState,
  isHorizontal,
  onChange,
  options,
  testID,
  value,
  ...props
}: SFCPropsModel<RadioFieldPropsModel<TType>>): ReactElement<
  SFCPropsModel<RadioFieldPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });
  const isDisabled = elementState === ELEMENT_STATE.DISABLED;
  const outerCircleSize = theme.shape.height.s;
  const innerCircleSize = outerCircleSize - theme.shape.spacing.s;

  return (
    <Wrapper
      isRow={isHorizontal}
      s={THEME_SIZE.SMALL}
      style={styles}
      testID={testID}>
      {options.map(({ icon, id, label }) => {
        const isActiveF = id === valueControlled;
        const colorF =
          theme.color.palette[color][
            isActiveF ? THEME_ROLE.ACTIVE : isDisabled ? THEME_ROLE.MUTED : THEME_ROLE.MAIN
          ];
        return (
          <Activatable key={id}>
            {(isActive) => (
              <Wrapper
                isRowAlign
                onPress={() => valueControlledSet(id)}
                position={SHAPE_POSITION.RELATIVE}>
                <Wrapper
                  isAbsoluteFill
                  zIndex={1}
                />

                <Wrapper
                  border
                  borderColor={colorF}
                  height={outerCircleSize}
                  isCenter
                  round={outerCircleSize / 2}
                  width={outerCircleSize}>
                  <Appearable isActive={isActive || isActiveF}>
                    <Wrapper
                      backgroundColor={colorF}
                      height={innerCircleSize}
                      round={innerCircleSize / 2}
                      width={innerCircleSize}
                    />
                  </Appearable>
                </Wrapper>

                {icon && <Icon icon={icon} />}

                <TranslatableText>{label}</TranslatableText>
              </Wrapper>
            )}
          </Activatable>
        );
      })}
    </Wrapper>
  );
};
