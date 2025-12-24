import { type AsyncPropsModel } from '@lib/frontend/data/data.models';
import {
  type _UseQueryModel,
  type _UseQueryParamsModel,
} from '@lib/frontend/data/hooks/useQuery/_useQuery.models';

export type UseQueryParamsModel<TParams = undefined, TResult = void> = _UseQueryParamsModel<
  TParams,
  TResult
>;

export type UseQueryModel<TResult = void> = _UseQueryModel<TResult>;

export type UseQueryOptionsModel<TResult = void> = AsyncPropsModel & {
  cache?: boolean | number;
  initialData?: TResult | null;
};
