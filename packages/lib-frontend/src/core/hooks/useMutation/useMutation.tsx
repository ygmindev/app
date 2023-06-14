import { _useMutation } from '#lib-frontend/core/hooks/useMutation/_useMutation';
import type {
  UseMutationModel,
  UseMutationParamsModel,
} from '#lib-frontend/core/hooks/useMutation/useMutation.models';

export const useMutation = <TParams = undefined, TResult = void>({
  ...params
}: UseMutationParamsModel<TParams, TResult>): UseMutationModel<TParams, TResult> =>
  _useMutation<TParams, TResult>({ ...params });
