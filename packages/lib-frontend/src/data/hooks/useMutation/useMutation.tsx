import { _useMutation } from '#lib-frontend/data/hooks/useMutation/_useMutation';
import {
  type UseMutationModel,
  type UseMutationParamsModel,
} from '#lib-frontend/data/hooks/useMutation/useMutation.models';

export const useMutation = <TParams = undefined, TResult = void>(
  ...params: UseMutationParamsModel<TParams, TResult>
): UseMutationModel<TParams, TResult> => _useMutation<TParams, TResult>(...params);
