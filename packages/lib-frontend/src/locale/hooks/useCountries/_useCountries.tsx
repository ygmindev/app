import { countries } from 'countries-list';
import reduce from 'lodash/reduce';

import { config } from '#lib-config/locale/country/country';
import { type _UseCountriesModel } from '#lib-frontend/locale/hooks/useCountries/_useCountries.models';
import { pick } from '#lib-shared/core/utils/pick/pick';

export const _useCountries = (): _UseCountriesModel =>
  reduce(
    pick(countries, config.supportedCountries),
    (result, v, k) => [...result, { callingCode: v.phone, code: k, name: v.name }],
    [] as _UseCountriesModel,
  );
