import { _config } from '@lib/config/graphql/graphql';
import {
  type UseAppGraphqlModel,
  type UseAppGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql.models';
import { type GraphqlQueryHttpParamsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { graphqlRequest } from '@lib/frontend/data/utils/graphqlRequest/graphqlRequest';
import { type ExecutionResult, type GraphQLArgs } from 'graphql';
import { graphql } from 'graphql';

const schema = _config();

export const useAppGraphql = ({}: UseAppGraphqlParamsModel = {}): UseAppGraphqlModel => ({
  query: async <TParams, TResult, TName extends string = string>({
    fields,
    name,
    params: paramsF,
    type,
    variables,
  }: GraphqlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> =>
    graphqlRequest({
      fields,
      name,
      onRequest: async ({ query, variables: variablesF }) =>
        graphql({
          schema,
          source: query,
          variableValues: variablesF as GraphQLArgs['variableValues'],
        }) as ExecutionResult<{ [name in TName]: TResult }>,
      params: paramsF,
      type,
      variables,
    }),
});
