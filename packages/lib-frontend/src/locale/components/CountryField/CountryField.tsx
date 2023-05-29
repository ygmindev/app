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

  const _countries = useCountries();
  const _options = useMemo(
    () =>
      _countries.map(({ callingCode, code, name }) => ({
        code,
        id: callingCode,
        label: `${name} +${callingCode}`,
      })),
    [_countries],
  );

  useAsync(
    {
      onMount: async (isMounted) => {
        const _country = isMounted() && (await currentCountry());
        const _value = _country && find(_options, ({ code }) => code.includes(_country));
        isMounted() && _value && valueControlledSet(_value.id);
      },
    },
    [_options],
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
