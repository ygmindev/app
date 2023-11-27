import { useState } from 'react';

import { type AccordionPropsModel } from '#lib-frontend/animation/components/Accordion/Accordion.models';
import { Rotatable } from '#lib-frontend/animation/components/Rotatable/Rotatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { LineItem } from '#lib-frontend/core/components/LineItem/LineItem';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import {
  type ElementStateModel,
  type LFCModel,
  type MeasureModel,
} from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const Accordion: LFCModel<AccordionPropsModel> = ({
  children,
  color,
  defaultValue,
  elementState,
  icon,
  image,
  onChange,
  title,
  type,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [measure, measureSet] = useState<MeasureModel>();
  const { valueControlled, valueControlledSet } = useValueControlled<ElementStateModel>({
    defaultValue,
    onChange,
    value,
  });

  const handleToggle = (): void =>
    valueControlledSet(
      valueControlled === ELEMENT_STATE.ACTIVE ? ELEMENT_STATE.INACTIVE : ELEMENT_STATE.ACTIVE,
    );

  return (
    <Wrapper {...wrapperProps}>
      <LineItem
        color={color}
        elementState={elementState}
        icon={icon}
        image={image}
        mHorizontal
        onPress={handleToggle}
        rightElement={(isActive) => (
          <Rotatable elementState={valueControlled}>
            <Button
              elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
              icon="chevronDown"
              isHidden
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Rotatable>
        )}
        title={title}
        type={type}
      />

      <Wrapper
        animation={{
          states: {
            [ELEMENT_STATE.ACTIVE]: { height: measure?.height },
            [ELEMENT_STATE.INACTIVE]: { height: 0 },
          },
        }}
        elementState={valueControlled}
        isOverflowHidden>
        <Wrapper onMeasure={measureSet}>
          <Divider mHorizontal />

          {children}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
