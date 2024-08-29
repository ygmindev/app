import { type SearchConfigModel } from '@lib/config/search/search/search.models';
import {
  type _UseSearchModel,
  type _UseSearchParamsModel,
} from '@lib/frontend/search/hooks/useSearch/_useSearch.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type UseSearchParamsModel<TType extends WithIdModel> = PartialModel<SearchConfigModel> &
  Pick<_UseSearchParamsModel<TType>, 'items' | 'keys' | 'onChange'>;

export type UseSearchModel<TType> = _UseSearchModel<TType>;
