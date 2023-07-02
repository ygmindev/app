import { type ExecutionResult } from 'graphql';

import { type GraphQlQueryHttpParamsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';

export type GraphQlRequestParamsModel<
  TParams,
  TResult,
  TName extends string = string,
> = GraphQlQueryHttpParamsModel<TParams, TResult, TName> & {
  onRequest(params: {
    query: string;
    variables?: TParams;
  }): Promise<ExecutionResult<{ [name in TName]: TResult }> | null>;
};

export type GraphQlRequestModel<TResult> = Promise<TResult | null>;
