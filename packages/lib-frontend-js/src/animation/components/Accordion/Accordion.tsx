import { type AccordionPropsModel } from '@lib/frontend/animation/components/Accordion/Accordion.models';
import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel, type MeasureModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { useState } from 'react';

export const Accordion: LFCModel<AccordionPropsModel> = ({
  children,
  color,
  defaultValue,
  fontStyle,
  icon,
  image,
  isExpandable = true,
  isTransparent,
  leftElement,
  onChange,
  rightElement,
  rightTooltip,
  size,
  title,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
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
      p={isTransparent ? undefined : THEME_SIZE.SMALL}
      round={!isTransparent}>
      {isExpandable ? (
        <PressableTitle
          color={color}
          elementState={elementStateControlled}
          fontStyle={fontStyle}
          icon={icon}
          image={image}
          leftElement={leftElement}
          onPress={handleToggle}
          rightElement={(isActiveF) => (
            <Wrapper
              isAlign
              isRow>
              {rightElement?.(isActiveF)}
              <Rotatable
                directionActive={DIRECTION.RIGHT}
                isActive={elementStateControlled === ELEMENT_STATE.ACTIVE}>
                <Button
                  elementState={
                    elementStateControlled === ELEMENT_STATE.DISABLED
                      ? ELEMENT_STATE.DISABLED
                      : isActiveF
                        ? ELEMENT_STATE.ACTIVE
                        : undefined
                  }
                  icon="chevronRight"
                  isHidden
                  size={size}
                  tooltip={rightTooltip}
                  type={BUTTON_TYPE.INVISIBLE}
                />
              </Rotatable>
            </Wrapper>
          )}
          title={title}
        />
      ) : (
        <Title
          color={color}
          fontStyle={fontStyle}
          height={theme.shape.height[THEME_SIZE.MEDIUM]}
          icon={icon}
          image={image}
          // leftElement={leftElement}
          title={title}
        />
      )}

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
