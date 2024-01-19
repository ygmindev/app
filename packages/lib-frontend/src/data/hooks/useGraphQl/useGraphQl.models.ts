import { type GraphQlQueryHttpParamsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseApiParamsModel } from '@lib/frontend/http/hooks/useApi/useApi.models';

export type UseGraphQlParamsModel = UseApiParamsModel;

export type UseGraphQlModel = {
  query<TParams, TResult, TName extends string = string>(
    params: GraphQlQueryHttpParamsModel<TParams, TResult, TName>,
  ): Promise<TResult | null>;

  queryBatches<
    TParams extends Array<unknown>,
    TResult extends Array<unknown>,
    TName extends Array<string> = Array<string>,
  >(
    params: Array<GraphQlQueryHttpParamsModel<TParams[number], TResult[number], TName[number]>>,
  ): Promise<Array<TResult[number]>>;
};
