import { config } from '@lib/config/graphql/graphql.main';
import { useAppGraphql as useAppGraphqlBase } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.base';
import {
  type UseAppGraphqlModel,
  type UseAppGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.models';
import {
  type GraphqlHttpResponseModel,
  type GraphqlParamsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { graphql } from 'graphql';

export const useAppGraphql = ({ ...params }: UseAppGraphqlParamsModel = {}): UseAppGraphqlModel =>
  useAppGraphqlBase({
    ...params,
    query: async <TParams, TResult, TName extends string = string>({
      query,
      variables,
    }: GraphqlParamsModel<TParams>) =>
      graphql({
        schema: config.config(),
        source: query,
        variableValues: variables as Record<string, unknown>,
      }) as GraphqlHttpResponseModel<TResult, TName>,
  });
