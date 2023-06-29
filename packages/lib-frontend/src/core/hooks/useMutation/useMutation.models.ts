import {
  type _UseMutationModel,
  type _UseMutationParamsModel,
} from '#lib-frontend/core/hooks/useMutation/_useMutation.models';

export type UseMutationParamsModel<TParams = undefined, TResult = void> = _UseMutationParamsModel<
  TParams,
  TResult
>;

export type UseMutationModel<TParams = undefined, TResult = void> = _UseMutationModel<
  TParams,
  TResult
>;
