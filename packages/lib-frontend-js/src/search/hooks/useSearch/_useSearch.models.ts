import { type SearchConfigModel } from '@lib/config/search/search/search.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type _UseSearchParamsModel<TType extends WithIdModel> = SearchConfigModel & {
  items: Array<TType>;
  keys: Array<string>;
  onChange?(value: string): void;
};

export type _UseSearchModel<TResult> = {
  isLoading?: boolean;
  query?: string;
  result: Array<TResult>;
  search(query: string): Promise<void>;
};
