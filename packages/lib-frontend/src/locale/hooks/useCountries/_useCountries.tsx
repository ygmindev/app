import { countries } from 'countries-list';
import pick from 'lodash/pick';
import reduce from 'lodash/reduce';

import { config } from '#lib-config/locale/country/country';
import type { _UseCountriesModel } from '#lib-frontend/locale/hooks/useCountries/_useCountries.models';

export const _useCountries = (): _UseCountriesModel =>
  reduce(
    pick(countries, config.supportedCountries),
    (result, v, k) => [...result, { callingCode: v.phone, code: k, name: v.name }],
    [] as _UseCountriesModel,
  );
