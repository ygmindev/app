import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { getCallingCode } from '@lib/frontend/locale/utils/getCallingCode/getCallingCode';
import { getCountries } from '@lib/frontend/locale/utils/getCountries/getCountries';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { PHONE_FIELD_COUNTRY_FIELD_WIDTH } from '@lib/frontend/user/components/PhoneField/PhoneField.constants';
import type { PhoneFieldPropsModel } from '@lib/frontend/user/components/PhoneField/PhoneField.models';
import { useMemo } from 'react';

export const PhoneField: SFCModel<PhoneFieldPropsModel> = ({
  defaultValue,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { setValueControlled, valueControlled } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });

  const _countries = useMemo(getCountries, []);

  return (
    <Wrapper
      isRowAlign
      style={styles}
      testID={testID}>
      <SelectField
        icon="globe"
        label={t('core:labels.country')}
        options={_countries.map((country) => ({ id: country, label: country }))}
        renderValue={({ id }) => `${id} +${getCallingCode(id)}`}
        value="US"
        width={PHONE_FIELD_COUNTRY_FIELD_WIDTH}
      />

      <TextField
        icon="phone"
        label={t('core:labels.phone')}
        onChange={setValueControlled}
        value={valueControlled}
      />
    </Wrapper>
  );
};
