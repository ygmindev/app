import { useDebounce } from '@lib/frontend/core/utils/useDebounce/useDebounce';
import {
  type _UseSearchModel,
  type _UseSearchParamsModel,
} from '@lib/frontend/search/hooks/useSearch/_useSearch.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { Document, type FieldName } from 'flexsearch';
import { useEffect, useRef, useState } from 'react';

export const _useSearch = <TType extends WithIdModel>({
  delay,
  items,
  keys,
  limit,
  minLength,
  threshold,
}: _UseSearchParamsModel<TType>): _UseSearchModel<TType> => {
  const [query, querySet] = useState<string>();
  const [result, resultSet] = useState<Array<TType>>(items);
  const [isLoading, isLoadingSet] = useState<boolean>(false);

  const searcherRef = useRef<Document<TType>>(null);

  useEffect(() => {
    const index = new Document<TType>({
      document: {
        id: 'id',
        index: keys as Array<FieldName<TType>>,
        store: true,
      },
      tokenize: 'forward',
    });
    items.forEach((v) => index.add(v));
    searcherRef.current = index;
  }, [keys, items]);

  const search = useDebounce(
    async (value: string): Promise<void> => {
      isLoadingSet(true);
      querySet(value);
      let resultF: Array<TType> = items;
      if (value?.length >= minLength) {
        resultF = filterNil(
          (await searcherRef?.current?.searchAsync({ enrich: true, limit, query: value }))
            ?.map((v) => v.result.map((vv) => vv.doc))
            .flat(),
        );
      }
      isLoadingSet(false);
      resultSet(resultF);
    },
    { duration: delay },
  );

  return { isLoading, query, result, search };
};
