import {
  type GraphqlHttpResponseModel,
  type GraphqlParamsModel,
  type GraphqlQueryHttpParamsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type UseApiParamsModel } from '@lib/frontend/http/hooks/useApi/useApi.models';

export type UseGraphqlParamsModel = UseApiParamsModel & {
  query?<TResult, TParams, TName extends string = string>(
    params: GraphqlParamsModel<TParams>,
  ): Promise<GraphqlHttpResponseModel<TResult, TName> | null>;
};

export type UseGraphqlModel = {
  query<TResult, TParams, TName extends string = string>(
    params: GraphqlQueryHttpParamsModel<TResult, TParams, TName>,
  ): Promise<TResult | null>;
};
