import { type AccordionPropsModel } from '@lib/frontend/animation/components/Accordion/Accordion.models';
import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import {
  type ElementStateModel,
  type LFCModel,
  type MeasureModel,
} from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useState } from 'react';

export const Accordion: LFCModel<AccordionPropsModel> = ({
  children,
  color,
  defaultValue,
  fontStyle,
  icon,
  image,
  isTransparent,
  onChange,
  size,
  title,
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
    <Wrapper
      {...wrapperProps}
      border={!isTransparent}
      round>
      <PressableTitle
        color={color}
        elementState={valueControlled}
        fontStyle={fontStyle}
        icon={icon}
        image={image}
        leftElement={(isActive) => (
          <Rotatable
            directionInactive={DIRECTION.RIGHT}
            elementState={valueControlled}>
            <Button
              elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
              icon="chevronUp"
              isHidden
              size={size}
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Rotatable>
        )}
        mHorizontal
        onPress={handleToggle}
        rightElement={() => <></>}
        title={title}
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
          {!isTransparent && <Divider mHorizontal />}

          <Wrapper>{children}</Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
