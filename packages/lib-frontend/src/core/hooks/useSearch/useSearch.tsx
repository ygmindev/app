import { _useSearch } from '@lib/frontend/core/hooks/useSearch/_useSearch';
import type {
  UseSearchModel,
  UseSearchParamsModel,
} from '@lib/frontend/core/hooks/useSearch/useSearch.models';

export const useSearch = <TType,>(params: UseSearchParamsModel<TType>): UseSearchModel<TType> =>
  _useSearch(params);
