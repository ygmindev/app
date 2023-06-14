import type { CallablePromiseModel } from '#lib-shared/core/core.models';
import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export interface _UseQueryParamsModel<TType> extends WithIdModel {
  cache?: number;
  query: CallablePromiseModel<TType | null>;
}

export interface _UseQueryModel<TType> extends WithIdModel {
  data?: TType | null;
  error?: Error | null;
  isError: boolean;
  isLoading: boolean;
  query: CallablePromiseModel<TType | null>;
  resetQuery(id: string): void;
  setQueryData(id: string, data?: TType | null): void;
}
