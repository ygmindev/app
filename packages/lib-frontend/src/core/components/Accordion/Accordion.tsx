import type { AccordionPropsModel } from '@lib/frontend/core/components/Accordion/Accordion.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { ElementStateModel, MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { FONT_CASING } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useState } from 'react';

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
  const [measure, setMeasure] = useState<MeasureModel>();
  const { setValueControlled, valueControlled } = useControlledValue<ElementStateModel>({
    defaultValue,
    onChange,
    value,
  });

  const _handleToggle = (): void =>
    setValueControlled(
      valueControlled === ELEMENT_STATE.ACTIVE ? ELEMENT_STATE.INACTIVE : ELEMENT_STATE.ACTIVE,
    );

  return (
    <Wrapper
      spacing={THEME_BASIC_SIZE.SMALL}
      style={styles}
      testID={testID}>
      <Wrapper
        isRowAlign
        justify={FLEX_JUSTIFY.SPACE_BETWEEN}
        onPress={_handleToggle}>
        {label && (
          <Text
            casing={FONT_CASING.CAPITALIZE}
            fontSize={THEME_SIZE.LARGE}>
            {label}
          </Text>
        )}

        <Wrapper
          animation={{
            states: {
              [ELEMENT_STATE.INACTIVE]: { transform: [{ rotateZ: '0deg' }] },
              [ELEMENT_STATE.ACTIVE]: { transform: [{ rotateZ: '90deg' }] },
            },
          }}
          elementState={valueControlled}>
          <Icon icon="chevronRight" />
        </Wrapper>
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
        <Wrapper onMeasure={setMeasure}>{children}</Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
