import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type FuzzyParamsModel } from '@lib/frontend/search/utils/Fuzzy/Fuzzy.models';

export type UseSearchParamsModel<TType extends TranslatableOptionModel> = Omit<
  FuzzyParamsModel<TType>,
  'options'
> & {
  limit?: number;
} & {
  duration?: number;
  minLength?: number;
  options: Array<TType> | ((query?: string) => Promise<Array<TType>>);
  onSearch?(query?: string): void;
};

export type UseSearchModel<TType extends TranslatableOptionModel> = {
  isLoading?: boolean;
  query?: string;
  result: Array<TType>;
  search(query?: string): Promise<void>;
};
