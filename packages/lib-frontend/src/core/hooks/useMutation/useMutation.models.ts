import type {
  _UseMutationModel,
  _UseMutationParamsModel,
} from '@lib/frontend/core/hooks/useMutation/_useMutation.models';

export interface UseMutationParamsModel<TParams = undefined, TResult = void>
  extends _UseMutationParamsModel<TParams, TResult> {}

export interface UseMutationModel<TParams = undefined, TResult = void>
  extends _UseMutationModel<TParams, TResult> {}
