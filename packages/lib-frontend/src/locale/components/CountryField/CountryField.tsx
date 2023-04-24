import type { SFCModel } from '@lib/frontend/core/core.models';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import type { CountryFieldPropsModel } from '@lib/frontend/locale/components/CountryField/CountryField.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { countries } from '@lib/frontend/locale/utils/countries/countries';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useMemo } from 'react';

export const CountryField: SFCModel<CountryFieldPropsModel> = ({
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

  const _options = useMemo(
    () => countries().map((country) => ({ id: country, label: country })),
    [],
  );

  return (
    <SelectField
      {...props}
      icon="globe"
      label={t('core:labels.country')}
      onChange={valueControlledSet}
      options={_options}
      style={styles}
      testID={testID}
      value={valueControlled}
    />
  );
};
