import { useQuery } from '@lib/frontend/core/hooks/useQuery/useQuery';
import { _useCountries } from '@lib/frontend/locale/hooks/useCountries/_useCountries';
import type { UseCountriesModel } from '@lib/frontend/locale/hooks/useCountries/useCountries.models';

export const useCountries = (): UseCountriesModel => {
  const _data = _useCountries();
  const { data } = useQuery({ cache: Infinity, id: 'countries', query: async () => _data });
  return data ?? [];
};
