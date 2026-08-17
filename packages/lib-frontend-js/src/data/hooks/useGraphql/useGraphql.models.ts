import { type UseHttpParamsModel } from '@lib/frontend/http/hooks/useHttp/useHttp.models';
import { type GraphqlQueryHttpParamsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';

export type UseGraphqlParamsModel = UseHttpParamsModel;

export type UseGraphqlModel = {
  mutate<TResult, TParams, TName extends string = string>(
    params: Omit<GraphqlQueryHttpParamsModel<TResult, TParams, TName>, 'operation'>,
  ): Promise<TResult | null>;

  query<TResult, TParams, TName extends string = string>(
    params: GraphqlQueryHttpParamsModel<TResult, TParams, TName>,
  ): Promise<TResult | null>;
};
