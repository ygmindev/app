import find from 'lodash/find';
import { forwardRef, useMemo } from 'react';

import { type RLFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type CountryFieldPropsModel,
  type CountryFieldRefModel,
} from '#lib-frontend/locale/components/CountryField/CountryField.models';
import { useCountries } from '#lib-frontend/locale/hooks/useCountries/useCountries';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { currentCountry } from '#lib-frontend/locale/utils/currentCountry/currentCountry';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const CountryField: RLFCModel<CountryFieldRefModel, CountryFieldPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, ref) => {
    const { t } = useTranslation();
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

    useAsync(
      async (isMounted) => {
        const country = isMounted() && (await currentCountry());
        const value = country && find(options, ({ code }) => code.includes(country));
        isMounted() && value && valueControlledSet(value.id);
      },
      [options],
    );

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
