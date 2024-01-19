import reduce from 'lodash/reduce';
import { useMemo } from 'react';

import { _useCountries } from '@lib/frontend/locale/hooks/useCountries/_useCountries';
import { type UseCountriesModel } from '@lib/frontend/locale/hooks/useCountries/useCountries.models';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';

export const useCountries = (): UseCountriesModel =>
  useMemo(() => {
    const countries = _useCountries();
    return reduce(
      groupBy(countries, 'callingCode'),
      (result, v, k) => [
        ...result,
        {
          callingCode: k,
          code: v.map(({ code }) => code).join('/'),
          name: v.map(({ name }) => name).join('/'),
        },
      ],
      [] as UseCountriesModel,
    );
  }, []);
