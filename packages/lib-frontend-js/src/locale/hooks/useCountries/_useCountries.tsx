import countryConfig from '@lib/config/country/country';
import { type _UseCountriesModel } from '@lib/frontend/locale/hooks/useCountries/_useCountries.models';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { countries, type ICountry } from 'countries-list';
import reduce from 'lodash/reduce';

export const _useCountries = (): _UseCountriesModel => {
  const { supportedCountries } = countryConfig.params();
  return reduce(
    pick(countries, supportedCountries) as unknown as Array<ICountry>,
    (result, v, k) => [...result, { callingCode: `${v.phone[0]}`, code: `${k}`, name: v.name }],
    [] as _UseCountriesModel,
  );
};
