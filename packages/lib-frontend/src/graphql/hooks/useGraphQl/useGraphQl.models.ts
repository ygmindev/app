import type { GraphQlQueryParamsModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import type { UseApiParamsModel } from '@lib/frontend/http/hooks/useApi/useApi.models';
import type { GraphQLError } from 'graphql';

export interface GraphQlHttpParamsModel<TParams> {
  query: string;
  variables?: TParams;
}

export interface GraphQlHttpResponseModel<TName extends string, TResult> {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
}

export interface UseGraphQlParamsModel extends Omit<UseApiParamsModel, 'path'> {}

export interface GraphQlQueryHttpParamsModel<
  TParams,
  TResult,
  TName extends string = string,
  TError extends Error = Error,
> extends GraphQlQueryParamsModel<TParams, TResult, TName> {
  onError?(error: TError): Promise<void>;
  variables?: TParams;
}

export interface UseGraphQlModel {
  isLoading: boolean;
  query<TParams, TResult, TName extends string = string, TError extends Error = Error>(
    params: GraphQlQueryHttpParamsModel<TParams, TResult, TName, TError>,
  ): Promise<TResult | null>;
}
