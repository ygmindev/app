import { _graphql } from '@lib/config/graphql/_graphql';
import { useAppGraphql as useAppGraphqlBase } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.base';
import {
  type UseAppGraphqlModel,
  type UseAppGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.models';
import {
  type GraphqlHttpResponseModel,
  type GraphqlParamsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { graphql } from 'graphql';

export const useAppGraphql = ({ ...params }: UseAppGraphqlParamsModel = {}): UseAppGraphqlModel => {
  const context = useRootContext();
  return useAppGraphqlBase({
    ...params,
    query: async <TResult, TParams, TName extends string = string>({
      query,
      variables,
    }: GraphqlParamsModel<TParams>) => {
      if (context[GRAPHQL]) {
        return graphql({
          schema: _graphql(context[GRAPHQL]),
          source: query,
          variableValues: variables as Record<string, unknown>,
        }) as GraphqlHttpResponseModel<TResult, TName>;
      }
      throw new Error(`graphql not initialized ${query}`);
    },
  });
};
