import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { _SwitchField } from '@lib/frontend/form/components/SwitchField/_SwitchField';
import type { SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/SwitchField.models';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const SwitchField: SFCModel<SwitchFieldPropsModel> = ({
  activeIcon = ICONS.check,
  defaultValue,
  inactiveIncon = ICONS.times,
  isDisabled,
  label,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { fieldValue, setFieldValue } = useFieldValue<'true' | 'false'>({
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
        activeIcon={activeIcon}
        inactiveIncon={inactiveIncon}
        isDisabled={isDisabled}
        onChange={setFieldValue}
        value={fieldValue}
      />

      {label && <Text>{label}</Text>}
    </Wrapper>
  );
};
