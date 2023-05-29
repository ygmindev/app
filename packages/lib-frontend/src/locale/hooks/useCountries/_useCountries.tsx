import { config } from '@lib/config/locale/country/country';
import type { _UseCountriesModel } from '@lib/frontend/locale/hooks/useCountries/_useCountries.models';
import { countries } from 'countries-list';
import pick from 'lodash/pick';
import reduce from 'lodash/reduce';

export const _useCountries = (): _UseCountriesModel =>
  reduce(
    pick(countries, config.supportedCountries),
    (result, v) => [...result, { callingCode: v.phone, name: v.name }],
    [] as _UseCountriesModel,
  );
