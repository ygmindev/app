import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { RadioFieldPropsModel } from '@lib/frontend/core/components/RadioField/RadioField.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { ReactElement } from 'react';

export const RadioField = <TType extends string = string>({
  color = THEME_COLOR.PRIMARY,
  defaultValue,
  elementState,
  onChange,
  options,
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
  const _isDisabled = elementState === ELEMENT_STATE.DISABLED;
  const _outerCircleSize = theme.shape.height.s;
  const _innerCircleSize = _outerCircleSize - theme.shape.spacing.s;

  return (
    <Wrapper
      spacing={THEME_SIZE.SMALL}
      style={styles}>
      {options.map(({ icon, id, label }) => {
        const _isActive = id === valueControlled;
        const _color =
          theme.colors.tone[_isActive ? color : THEME_COLOR.NEUTRAL][
            _isDisabled || !_isActive ? THEME_ROLE.MUTED : THEME_ROLE.MAIN
          ];

        return (
          <Activatable key={id}>
            {(isActive) => (
              <Wrapper
                isRowAlign
                onPress={() => valueControlledSet(id)}>
                <Wrapper
                  border
                  borderColor={_color}
                  height={_outerCircleSize}
                  isCenter
                  round={_outerCircleSize / 2}
                  width={_outerCircleSize}>
                  <Appearable isVisible={_isActive || isActive}>
                    <Wrapper
                      backgroundColor={_color}
                      height={_innerCircleSize}
                      round={_innerCircleSize / 2}
                      width={_innerCircleSize}
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
