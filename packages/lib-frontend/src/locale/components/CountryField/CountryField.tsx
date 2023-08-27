import find from 'lodash/find';
import { useMemo } from 'react';

import { type LFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { SelectField } from '#lib-frontend/data/components/SelectField/SelectField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { type CountryFieldPropsModel } from '#lib-frontend/locale/components/CountryField/CountryField.models';
import { useCountries } from '#lib-frontend/locale/hooks/useCountries/useCountries';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { currentCountry } from '#lib-frontend/locale/utils/currentCountry/currentCountry';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const CountryField: LFCModel<CountryFieldPropsModel> = ({
  defaultValue,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const countries = useCountries();
  const options = useMemo(
    () =>
      countries.map(({ callingCode, code, name }) => ({
        code,
        id: callingCode,
        label: `${name} +${callingCode}`,
      })),
    [countries],
  );

  useAsync(
    async (isMounted) => {
      const country = isMounted() && (await currentCountry());
      const value = country && find(options, ({ code }) => code.includes(country));
      isMounted() && value && valueControlledSet(value.id);
    },
    [options],
  );

  return (
    <SelectField
      {...props}
      icon="globe"
      label={t('core:country')}
      onChange={valueControlledSet}
      options={options}
      style={styles}
      testID={testID}
      value={valueControlled}
    />
  );
};
