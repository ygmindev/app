import { type UseQueryOptionsModel } from '@lib/frontend/data/hooks/useQuery/useQuery.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type _UseQueryParamsModel<TParams = undefined, TResult = void> = [
  id: string,
  query: (params?: TParams) => Promise<TResult | null>,
  params?: TParams,
  options?: UseQueryOptionsModel<TResult>,
];

export type _UseQueryModel<TResult = void> = WithIdModel & {
  data?: TResult | null;
  isLoading?: boolean;
  query(): Promise<TResult | null>;
  reset(): Promise<void>;
  setData(values?: TResult): Promise<void>;
};
