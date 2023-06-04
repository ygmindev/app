import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { _SwitchField } from '@lib/frontend/form/components/SwitchField/_SwitchField';
import type { SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/SwitchField.models';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const SwitchField: SFCModel<SwitchFieldPropsModel> = ({
  defaultValue,
  elementState,
  iconActive = 'check',
  iconInactive = 'times',
  label,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { valueControlled, valueControlledSet } = useControlledValue<'true' | 'false'>({
    defaultValue: defaultValue || 'false',
    onChange,
    value,
  });
  return (
    <Wrapper
      isRowAlign
      onPress={() => valueControlledSet(valueControlled === 'true' ? 'false' : 'true')}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Wrapper
        isAbsoluteFill
        zIndex={1}
      />

      <_SwitchField
        elementState={elementState}
        iconActive={iconActive}
        iconInactive={iconInactive}
        value={valueControlled}
      />

      {label && <TranslatableText>{label}</TranslatableText>}
    </Wrapper>
  );
};
