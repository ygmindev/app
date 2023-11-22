import { type ReactElement } from 'react';

import { ANIMATION_STATES_APPEAR_SCALABLE } from '#lib-frontend/animation/animation.constants';
import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Circle } from '#lib-frontend/core/components/Circle/Circle';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type RadioFieldPropsModel } from '#lib-frontend/core/components/RadioField/RadioField.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const RadioField = <TType extends string | Array<string> = string>({
  defaultValue,
  isHorizontal,
  isMultiple,
  onChange,
  options,
  value,
  ...props
}: LFCPropsModel<RadioFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<RadioFieldPropsModel<TType>>
> => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  return (
    <Wrapper
      {...wrapperProps}
      isRowAlign={isHorizontal}
      p={THEME_SIZE.SMALL}
      round
      s={THEME_SIZE.SMALL}>
      {options.map(({ icon, id, label }) => {
        const isValue = isMultiple ? valueControlled?.includes(id) : valueControlled === id;
        return (
          <Activatable key={id}>
            {(isActive) => (
              <Wrapper
                border
                borderColor={THEME_COLOR.PRIMARY}
                isRowAlign
                onPress={() => {
                  if (isMultiple) {
                    const valueF = isValue
                      ? (valueControlled as Array<string>)?.filter((v) => v !== id)
                      : [...(valueControlled || []), id];
                    (valueF ?? []).sort();
                    return valueControlledSet(valueF as TType);
                  }
                  return valueControlledSet(id as TType);
                }}
                p={THEME_SIZE.SMALL}
                round>
                {icon && (
                  <Icon
                    color={THEME_COLOR.PRIMARY}
                    icon={icon}
                  />
                )}

                <Circle
                  backgroundColor={isValue ? THEME_COLOR.PRIMARY : undefined}
                  border
                  borderColor={THEME_COLOR.PRIMARY}
                  position={SHAPE_POSITION.RELATIVE}
                  size={THEME_SIZE_MORE.XSMALL}>
                  {isValue ? (
                    <Icon
                      color={THEME_COLOR_MORE.SURFACE}
                      icon="check"
                    />
                  ) : (
                    <Circle
                      animation={{ states: ANIMATION_STATES_APPEAR_SCALABLE }}
                      backgroundColor={THEME_COLOR.PRIMARY}
                      elementState={isActive ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE}
                      position={SHAPE_POSITION.ABSOLUTE}
                      size={
                        theme.shape.size[THEME_SIZE_MORE.XSMALL] -
                        theme.shape.spacing[THEME_SIZE.SMALL]
                      }
                    />
                  )}
                </Circle>

                <TranslatableText>{label}</TranslatableText>
              </Wrapper>
            )}
          </Activatable>
        );
      })}
    </Wrapper>
  );
};
