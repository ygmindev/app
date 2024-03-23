import { type UseMutationOptionsModel } from '@lib/frontend/data/hooks/useMutation/useMutation.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type _UseMutationParamsModel<TParams = undefined, TResult = void> = [
  id: string,
  callback: (params?: TParams) => Promise<TResult | null>,
  options?: UseMutationOptionsModel,
];

export type _UseMutationModel<TParams = undefined, TResult = void> = WithIdModel & {
  data?: TResult | null;
  mutate(params?: TParams): Promise<void>;
  reset(): Promise<void>;
  setData(values?: TResult): Promise<void>;
};
