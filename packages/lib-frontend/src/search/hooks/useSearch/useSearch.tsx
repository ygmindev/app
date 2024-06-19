import searchConfig from '@lib/config/search/search/search';
import { _useSearch } from '@lib/frontend/search/hooks/useSearch/_useSearch';
import {
  type UseSearchModel,
  type UseSearchParamsModel,
} from '@lib/frontend/search/hooks/useSearch/useSearch.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export const useSearch = <TType extends WithIdModel>(
  params: UseSearchParamsModel<TType>,
): UseSearchModel<TType> => {
  const configF = searchConfig.params();
  return _useSearch({ ...configF, ...params });
};
