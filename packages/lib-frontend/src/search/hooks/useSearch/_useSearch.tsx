import Fuse from 'fuse.js';
import { useCallback, useMemo, useState } from 'react';

import {
  type _UseSearchModel,
  type _UseSearchParamsModel,
} from '#lib-frontend/search/hooks/useSearch/_useSearch.models';
import {
  SEARCH_DELAY,
  SEARCH_LIMIT,
  SEARCH_THRESHOLD,
} from '#lib-frontend/search/hooks/useSearch/useSearch.constants';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';

export const _useSearch = <TType,>({
  delay = SEARCH_DELAY,
  keys,
  limit = SEARCH_LIMIT,
  list,
  onChange,
}: _UseSearchParamsModel<TType>): _UseSearchModel<TType> => {
  const [query, querySet] = useState<string>('');

  const querySetF = useCallback(
    debounce(
      (value) => {
        querySet(value);
        onChange && onChange(value);
      },
      { duration: delay },
    ),
    [querySet, delay],
  );

  const fuse = useMemo(() => new Fuse(list, { keys, threshold: SEARCH_THRESHOLD }), [list]);

  const result = useMemo(
    () => (query ? fuse.search(query, { limit }).map(({ item }) => item) : list),
    [fuse, limit, query],
  );

  const search = useCallback(querySetF, []);

  return { result, search };
};
