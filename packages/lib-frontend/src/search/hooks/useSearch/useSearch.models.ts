import {
  type _UseSearchModel,
  type _UseSearchParamsModel,
} from '@lib/frontend/search/hooks/useSearch/_useSearch.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type UseSearchParamsModel<TType extends WithIdModel> = _UseSearchParamsModel<TType>;

export type UseSearchModel<TType> = _UseSearchModel<TType>;
