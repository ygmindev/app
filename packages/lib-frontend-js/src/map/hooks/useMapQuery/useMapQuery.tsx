import { useDebounce } from '@lib/frontend/core/utils/useDebounce/useDebounce';
import { useMutation } from '@lib/frontend/data/hooks/useMutation/useMutation';
import { _useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/_useMapQuery';
import { USE_MAP_QUERY_DEBOUNCE_DURATION } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.constants';
import { type UseMapQueryModel } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.models';

export const useMapQuery = (): UseMapQueryModel => {
  const { data, mutate: _mutate } = _useMapQuery();
  const { isLoading, mutate } = useMutation('map', _mutate);
  const queryF = useDebounce(mutate, { duration: USE_MAP_QUERY_DEBOUNCE_DURATION });
  return { data, isLoading, mutate: queryF };
};
