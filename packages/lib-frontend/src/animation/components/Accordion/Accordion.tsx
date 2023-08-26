import { useState } from 'react';

import { type AccordionPropsModel } from '#lib-frontend/animation/components/Accordion/Accordion.models';
import { RotatableIcon } from '#lib-frontend/core/components/RotatableIcon/RotatableIcon';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import {
  type ElementStateModel,
  type MeasureModel,
  type SFCModel,
} from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/form/hooks/useValueControlled/useValueControlled';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const Accordion: SFCModel<AccordionPropsModel> = ({
  children,
  defaultValue,
  label,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
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
      s={THEME_SIZE.SMALL}
      style={styles}
      testID={testID}>
      <Wrapper
        isRowAlign
        justify={FLEX_JUSTIFY.SPACE_BETWEEN}
        onPress={handleToggle}>
        {label && <Text fontSize={THEME_SIZE.LARGE}>{label}</Text>}

        <RotatableIcon
          directionActive={DIRECTION.BOTTOM}
          directionInactive={DIRECTION.RIGHT}
          elementState={valueControlled}
        />
      </Wrapper>

      <Wrapper
        animation={
          measure
            ? {
                states: {
                  [ELEMENT_STATE.ACTIVE]: { height: measure?.height },
                  [ELEMENT_STATE.INACTIVE]: { height: 0 },
                },
              }
            : undefined
        }
        elementState={valueControlled}
        isOverflowHidden>
        <Wrapper onMeasure={measure ? undefined : measureSet}>{children}</Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
