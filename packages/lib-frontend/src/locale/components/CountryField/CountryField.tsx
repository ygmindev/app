import find from 'lodash/find';
import { forwardRef, useEffect, useMemo } from 'react';

import { type RLFCModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type CountryFieldPropsModel,
  type CountryFieldRefModel,
} from '#lib-frontend/locale/components/CountryField/CountryField.models';
import { useCountries } from '#lib-frontend/locale/hooks/useCountries/useCountries';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const CountryField: RLFCModel<CountryFieldRefModel, CountryFieldPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, ref) => {
    const { t } = useTranslation();
    const [countryCode] = useStore('locale.countryCode');
    const { wrapperProps } = useLayoutStyles({ props });
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

    useEffect(() => {
      // TODO: better workflow?
      if (!valueControlled && countryCode) {
        const option = find(options, ({ code }) => code.includes(countryCode));
        option && valueControlledSet(option.id);
      }
    }, [countryCode, options, valueControlled]);

    return (
      <DropdownField
        {...wrapperProps}
        icon="globe"
        label={t('core:country')}
        onChange={valueControlledSet}
        options={options}
        ref={ref}
        value={valueControlled}
      />
    );
  },
);
