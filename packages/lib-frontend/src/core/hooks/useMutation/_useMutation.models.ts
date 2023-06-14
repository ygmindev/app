import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export interface _UseMutationParamsModel<TParams = undefined, TResult = void> extends WithIdModel {
  mutate(params?: TParams): Promise<TResult | null>;
}

export interface _UseMutationModel<TParams = undefined, TResult = void> extends WithIdModel {
  data?: TResult | null;
  isError: boolean;
  isLoading: boolean;
  mutate(params?: TParams): Promise<void>;
}
