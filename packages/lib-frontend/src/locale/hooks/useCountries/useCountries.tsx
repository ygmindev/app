import { _useCountries } from '@lib/frontend/locale/hooks/useCountries/_useCountries';
import type { UseCountriesModel } from '@lib/frontend/locale/hooks/useCountries/useCountries.models';
import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import reduce from 'lodash/reduce';
import { useMemo } from 'react';

export const useCountries = (): UseCountriesModel =>
  useMemo(() => {
    const _countries = _useCountries();
    return reduce(
      groupBy(_countries, 'callingCode'),
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