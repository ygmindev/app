import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface _UseQueryParamsModel<TResult = void> extends WithIdModel {
  cache?: number | boolean;
  isDisabled?: boolean;
  isInfinite?: boolean;
  onSuccess?(result: TResult): Promise<unknown>;
  query(): Promise<TResult | null>;
}

export interface _UseQueryResultModel<TResult = void, TError extends Error = Error>
  extends WithIdModel {
  data?: TResult | null | undefined;
  error?: TError | null | undefined;
  isError: boolean;
  isLoading: boolean;
  query(): Promise<TResult | null | undefined>;
  resetQuery(id: string): unknown;
  setQueryData(id: string, data?: TResult | null): unknown;
}
