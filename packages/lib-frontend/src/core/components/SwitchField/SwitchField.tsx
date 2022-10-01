import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { _SwitchField } from '@lib/frontend/core/components/SwitchField/_SwitchField';
import type { SwitchFieldPropsModel } from '@lib/frontend/core/components/SwitchField/SwitchField.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useField } from '@lib/frontend/core/hooks/useField/useField';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const SwitchField: SFCModel<SwitchFieldPropsModel> = ({
  activeIcon = ICON.check,
  defaultValue,
  inactiveIncon = ICON.times,
  isDisabled,
  label,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { fieldValue, setFieldValue } = useField<boolean>({
    defaultValue: defaultValue || false,
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
