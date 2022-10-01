import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';

export interface _UseMutationParamsModel<
  TParams = void,
  TResult = void,
  TError extends Error = Error,
> extends WithIdModel {
  mutate(params: TParams): Promise<TResult | null>;
  onError?(error: TError): Promise<void>;
  onStart?(): Promise<unknown>;
  onSuccess?(result: TResult | null): Promise<unknown>;
}

export interface _UseMutationResultModel<
  TParams = void,
  TResult = void,
  TError extends Error = Error,
> extends WithIdModel {
  data?: TResult | null;
  error?: TError | null;
  isError: boolean;
  isLoading: boolean;
  mutate(params: TParams): Promise<void>;
}
