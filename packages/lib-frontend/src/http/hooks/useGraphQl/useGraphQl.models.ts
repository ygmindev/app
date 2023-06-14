import type { UseApiParamsModel } from '#lib-frontend/http/hooks/useApi/useApi.models';
import type { GraphQlQueryHttpParamsModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';

export interface UseGraphQlParamsModel extends Omit<UseApiParamsModel, 'path'> {}

export interface UseGraphQlModel {
  query<TParams, TResult, TName extends string = string>(
    params: GraphQlQueryHttpParamsModel<TParams, TResult, TName>,
  ): Promise<TResult | null>;
}
