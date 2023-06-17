import type { CallablePromiseModel } from '#lib-shared/core/core.models';
import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type _UseQueryParamsModel<TType> = {
  cache?: number;
  query: CallablePromiseModel<TType | null>;
} & WithIdModel;

export type _UseQueryModel<TType> = {
  data?: TType | null;
  error?: Error | null;
  isError: boolean;
  isLoading: boolean;
  query: CallablePromiseModel<TType | null>;
  resetQuery(id: string): void;
  setQueryData(id: string, data?: TType | null): void;
} & WithIdModel;
