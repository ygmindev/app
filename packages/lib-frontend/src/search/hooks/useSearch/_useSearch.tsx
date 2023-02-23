import {
  SEARCH_DELAY,
  SEARCH_LIMIT,
  SEARCH_THRESHOLD,
} from '@lib/frontend/search/hooks/useSearch/_useSearch.constants';
import type {
  _UseSearchModel,
  _UseSearchParamsModel,
} from '@lib/frontend/search/hooks/useSearch/_useSearch.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import Fuse from 'fuse.js';
import { useCallback, useMemo, useState } from 'react';

export const _useSearch = <TType,>({
  list,
  keys,
  delay = SEARCH_DELAY,
  limit = SEARCH_LIMIT,
}: _UseSearchParamsModel<TType>): _UseSearchModel<TType> => {
  const [query, querySet] = useState<string>('');

  const _setQuery = useCallback(debounce({ callback: querySet, duration: delay }), [
    querySet,
    delay,
  ]);

  const fuse = useMemo(() => new Fuse(list, { keys, threshold: SEARCH_THRESHOLD }), [list]);

  const result = useMemo(
    () => (query ? fuse.search(query, { limit }).map(({ item }) => item) : list),
    [fuse, limit, query],
  );

  const search = useCallback(_setQuery, []);

  return { result, search };
};
