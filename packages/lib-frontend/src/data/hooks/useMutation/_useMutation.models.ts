import { type AsyncPropsModel } from '#lib-frontend/data/data.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type _UseMutationOptionsModel = AsyncPropsModel & {
  cache?: boolean | number;
};

export type _UseMutationParamsModel<TParams = undefined, TResult = void> = [
  id: string,
  callback: (params?: TParams) => Promise<TResult | null>,
  options?: _UseMutationOptionsModel,
];

export type _UseMutationModel<TParams = undefined, TResult = void> = WithIdModel & {
  data?: TResult | null;
  mutate(params?: TParams): Promise<void>;
};
