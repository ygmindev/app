import type { CallablePromiseModel } from '#lib-shared/core/core.models';
import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type _UseQueryParamsModel<TType> = [
  id: string,
  callback: CallablePromiseModel<TType | null>,
  options?: { cache?: boolean | number },
];

export type _UseQueryModel<TType> = {
  data?: TType | null;
  error?: Error | null;
  isError: boolean;
  isLoading: boolean;
  query: CallablePromiseModel<TType | null>;
  resetQuery(id: string): void;
  setQueryData(id: string, data?: TType | null): void;
} & WithIdModel;
