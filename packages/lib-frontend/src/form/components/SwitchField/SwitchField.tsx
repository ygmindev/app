import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { _SwitchField } from '@lib/frontend/form/components/SwitchField/_SwitchField';
import type { SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/SwitchField.models';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

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
    defaultValue,
    onChange,
    value,
  });

  return (
    <Wrapper
      isRowAlign
      style={styles}
      testID={testID}>
      <_SwitchField
        elementState={elementState}
        iconActive={iconActive}
        iconInactive={iconInactive}
        onChange={valueControlledSet}
        value={valueControlled}
      />

      {label && <TranslatableText>{label}</TranslatableText>}
    </Wrapper>
  );
};
