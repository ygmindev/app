import { type GraphqlQueryHttpParamsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type UseApiParamsModel } from '@lib/frontend/http/hooks/useApi/useApi.models';

export type UseGraphqlParamsModel = UseApiParamsModel;

export type UseGraphqlModel = {
  query<TParams, TResult, TName extends string = string>(
    params: GraphqlQueryHttpParamsModel<TParams, TResult, TName>,
  ): Promise<TResult | null>;

  queryBatches<
    TParams extends Array<unknown>,
    TResult extends Array<unknown>,
    TName extends Array<string> = Array<string>,
  >(
    params: Array<GraphqlQueryHttpParamsModel<TParams[number], TResult[number], TName[number]>>,
  ): Promise<Array<TResult[number]>>;
};
