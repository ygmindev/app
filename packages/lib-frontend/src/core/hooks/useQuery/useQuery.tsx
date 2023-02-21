import { _useQuery } from '@lib/frontend/core/hooks/useQuery/_useQuery';
import type {
  UseQueryModel,
  UseQueryParamsModel,
} from '@lib/frontend/core/hooks/useQuery/useQuery.models';

export const useQuery = <TType,>(params: UseQueryParamsModel<TType>): UseQueryModel<TType> =>
  _useQuery(params);
