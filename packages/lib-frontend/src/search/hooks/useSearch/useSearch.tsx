import { _useSearch } from '#lib-frontend/search/hooks/useSearch/_useSearch';
import {
  type UseSearchModel,
  type UseSearchParamsModel,
} from '#lib-frontend/search/hooks/useSearch/useSearch.models';

export const useSearch = <TType,>(params: UseSearchParamsModel<TType>): UseSearchModel<TType> =>
  _useSearch(params);
