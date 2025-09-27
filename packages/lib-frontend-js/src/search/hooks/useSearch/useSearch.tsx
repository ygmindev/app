import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { useDebounce } from '@lib/frontend/core/utils/useDebounce/useDebounce';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  SEARCH_DEBOUNCE,
  SEARCH_LIMIT,
  SEARCH_MIN_LENGTH,
} from '@lib/frontend/search/hooks/useSearch/useSearch.constant';
import {
  type UseSearchModel,
  type UseSearchParamsModel,
} from '@lib/frontend/search/hooks/useSearch/useSearch.models';
import { Fuzzy } from '@lib/frontend/search/utils/Fuzzy/Fuzzy';
import { type FuzzyModel } from '@lib/frontend/search/utils/Fuzzy/Fuzzy.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray.base';
import { useEffect, useRef, useState } from 'react';

export const useSearch = <TType extends TranslatableOptionModel>({
  duration = SEARCH_DEBOUNCE,
  keys,
  limit = SEARCH_LIMIT,
  minLength = SEARCH_MIN_LENGTH,
  onSearch,
  options,
}: UseSearchParamsModel<TType>): UseSearchModel<TType> => {
  const isArrayF = isArray(options);
  const [query, querySet] = useState<string>();
  const [result, resultSet] = useState<Array<TType>>(isArrayF ? options : []);
  const [isLoading, isLoadingSet] = useState<boolean>(false);
  const { t } = useTranslation();

  const searchRef = useRef<FuzzyModel<TType>>(null);

  useEffect(() => {
    searchRef.current = isArrayF ? new Fuzzy<TType>({ keys, options }) : null;
  }, []);

  const search = useDebounce(
    async (query?: string): Promise<void> => {
      querySet(query);
      let resultF: Array<TType> | undefined = result;
      if ((query?.length ?? 0) >= minLength) {
        resultF = isArrayF
          ? await searchRef.current?.search(query ?? '', { limit })
          : await options(query);
      } else {
        resultF = isArrayF ? options : [];
      }
      isLoadingSet(false);
      resultSet(resultF?.map((v) => ({ ...v, label: v.label ? t(v.label) : v.label })) ?? []);
      onSearch?.(query);
    },
    { duration },
  );

  return {
    isLoading,
    query,
    result,
    search: (query) => {
      query?.length && isLoadingSet(true);
      return search(query);
    },
  };
};
