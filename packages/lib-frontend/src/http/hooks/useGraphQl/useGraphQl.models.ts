import type { UseApiParamsModel } from '@lib/frontend/http/hooks/useApi/useApi.models';
import type { GraphQlQueryParamsModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { GraphQLError } from 'graphql';

export interface GraphQlHttpParamsModel<TParams> {
  query: string;
  variables?: TParams;
}

export interface GraphQlHttpResponseModel<TName extends string, TResult> {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
}

export interface GraphQlQueryHttpParamsModel<TParams, TResult, TName extends string = string>
  extends GraphQlQueryParamsModel<TParams, TResult, TName> {
  variables?: TParams;
}

export interface UseGraphQlParamsModel extends Omit<UseApiParamsModel, 'path'> {}

export interface UseGraphQlModel {
  query<TParams, TResult, TName extends string = string>(
    params: GraphQlQueryHttpParamsModel<TParams, TResult, TName>,
  ): Promise<TResult | null>;
}
