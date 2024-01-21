import { useMutation } from '@lib/frontend/data/hooks/useMutation/useMutation';
import { _useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/_useMapQuery';
import { USE_MAP_QUERY_DEBOUNCE_DURATION } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.constants';
import { type UseMapQueryModel } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { useCallback } from 'react';

export const useMapQuery = (): UseMapQueryModel => {
  const { data, query } = _useMapQuery();
  const { mutate } = useMutation('map', query);
  const queryF = useCallback(debounce(mutate, { duration: USE_MAP_QUERY_DEBOUNCE_DURATION }), []);
  return { data, query: queryF };
};
