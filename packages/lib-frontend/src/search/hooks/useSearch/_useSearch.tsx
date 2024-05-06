import {
  type _UseSearchModel,
  type _UseSearchParamsModel,
} from '@lib/frontend/search/hooks/useSearch/_useSearch.models';
import {
  SEARCH_DELAY,
  SEARCH_LIMIT,
  SEARCH_THRESHOLD,
} from '@lib/frontend/search/hooks/useSearch/useSearch.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import Fuse from 'fuse.js';
import uniqBy from 'lodash/uniqBy';
import { useMemo, useState } from 'react';

export const _useSearch = <TType extends WithIdModel>({
  delay = SEARCH_DELAY,
  items,
  keys,
  limit = SEARCH_LIMIT,
}: _UseSearchParamsModel<TType>): _UseSearchModel<TType> => {
  const [query, querySet] = useState<string>();
  const [result, resultSet] = useState<Array<TType>>(items);

  const searchF = debounce(
    (value: string) => {
      let resultF = value ? fuse.search(value, { limit }).map(({ item }) => item) : items;
      resultF = uniqBy(resultF, 'id');
      resultSet(resultF);
    },
    { duration: delay },
  );

  const fuse = useMemo(() => new Fuse(items, { keys, threshold: SEARCH_THRESHOLD }), [items]);
  const search = (value: string): void => {
    querySet(value);
    searchF(value);
  };
  return { query, result, search };
};
