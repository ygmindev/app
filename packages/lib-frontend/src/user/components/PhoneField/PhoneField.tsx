import type { SFCModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { TEXT_FIELD_KEYBOARD } from '#lib-frontend/form/components/TextField/TextField.constants';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import type { PhoneFieldPropsModel } from '#lib-frontend/user/components/PhoneField/PhoneField.models';

export const PhoneField: SFCModel<PhoneFieldPropsModel> = ({
  defaultValue,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });
  return (
    <TextField
      {...props}
      autoComplete="cell"
      icon="phone"
      keyboard={TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE}
      label={t('user:labels.phone')}
      onChange={valueControlledSet}
      style={styles}
      testID={testID}
      value={valueControlled}
    />
  );
};
