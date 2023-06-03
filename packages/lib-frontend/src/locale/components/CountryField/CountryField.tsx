import type { SFCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { SelectField } from '@lib/frontend/form/components/SelectField/SelectField';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import type { CountryFieldPropsModel } from '@lib/frontend/locale/components/CountryField/CountryField.models';
import { useCountries } from '@lib/frontend/locale/hooks/useCountries/useCountries';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { currentCountry } from '@lib/frontend/locale/utils/currentCountry/currentCountry';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { find } from 'lodash';
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
    {
      onMount: async (isMounted) => {
        const country = isMounted() && (await currentCountry());
        const value = country && find(options, ({ code }) => code.includes(country));
        isMounted() && value && valueControlledSet(value.id);
      },
    },
    [options],
  );

  return (
    <SelectField
      {...props}
      icon="globe"
      label={t('core:labels.country')}
      onChange={valueControlledSet}
      options={options}
      style={styles}
      testID={testID}
      value={valueControlled}
    />
  );
};
