import { type AccordionPropsModel } from '@lib/frontend/animation/components/Accordion/Accordion.models';
import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel, type MeasureModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
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
  const { elementStateControlled, elementStateControlledSet, isActive } = useElementStateControlled(
    {
      defaultElementState: defaultValue,
      elementState: value,
      onElementStateChange: onChange,
    },
  );

  const handleToggle = (): void =>
    elementStateControlledSet(isActive ? ELEMENT_STATE.INACTIVE : ELEMENT_STATE.ACTIVE);

  return (
    <Wrapper
      {...wrapperProps}
      border={!isTransparent}
      round>
      <PressableTitle
        color={color}
        elementState={elementStateControlled}
        fontStyle={fontStyle}
        icon={icon}
        image={image}
        leftElement={(isActiveF) => (
          <Rotatable isActive={elementStateControlled === ELEMENT_STATE.ACTIVE}>
            <Button
              elementState={isActiveF ? ELEMENT_STATE.ACTIVE : undefined}
              icon="chevronDown"
              isHidden
              size={size}
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Rotatable>
        )}
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
        elementState={elementStateControlled}
        isOverflowHidden>
        <Wrapper onMeasure={measureSet}>
          {!isTransparent && <Divider mHorizontal />}

          <Wrapper p>{children}</Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
