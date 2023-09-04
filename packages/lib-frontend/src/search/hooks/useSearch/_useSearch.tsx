import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';

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
}: _UseSearchParamsModel<TType>): _UseSearchModel<TType> => {
  const [query, querySet] = useState<string>();
  const [result, resultSet] = useState<Array<TType>>(list);

  const searchF = debounce(
    () => {
      const resultF = query ? fuse.search(query, { limit }).map(({ item }) => item) : list;
      resultSet(resultF);
    },
    { duration: delay },
  );

  const fuse = useMemo(() => new Fuse(list, { keys, threshold: SEARCH_THRESHOLD }), [list]);
  const search = (value: string): void => {
    querySet(value);
    searchF();
  };
  return { query, result, search };
};
