import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface _UseQueryParamsModel<TType> extends WithIdModel {
  cache?: number | boolean;
  query: CallablePromiseModel<TType | null>;
}

export interface _UseQueryResultModel<TType, TError extends Error = Error> extends WithIdModel {
  data?: TType | null;
  error?: TError | null;
  isError: boolean;
  isLoading: boolean;
  query: CallablePromiseModel<TType | null>;
  resetQuery(id: string): void;
  setQueryData(id: string, data?: TType | null): void;
}
