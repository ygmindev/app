import { type WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export type _UseMutationParamsModel<TParams = undefined, TResult = void> = [
  id: string,
  callback: (params?: TParams) => Promise<TResult | null>,
];

export type _UseMutationModel<TParams = undefined, TResult = void> = {
  data?: TResult | null;
  isError: boolean;
  isLoading: boolean;
  mutate(params?: TParams): Promise<void>;
} & WithIdModel;
