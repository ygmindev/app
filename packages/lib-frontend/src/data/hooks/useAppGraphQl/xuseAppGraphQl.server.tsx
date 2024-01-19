import { _config } from '@lib/config/data/graphql/graphql';
import {
  type UseAppGraphQlModel,
  type UseAppGraphQlParamsModel,
} from '@lib/frontend/data/hooks/useAppGraphQl/useAppGraphQl.models';
import { type GraphQlQueryHttpParamsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { graphQlRequest } from '@lib/frontend/data/utils/graphQlRequest/graphQlRequest';
import { type ExecutionResult, type GraphQLArgs } from 'graphql';
import { graphql } from 'graphql';

const schema = _config();

export const useAppGraphQl = ({}: UseAppGraphQlParamsModel = {}): UseAppGraphQlModel => ({
  query: async <TParams, TResult, TName extends string = string>({
    fields,
    name,
    params: paramsF,
    type,
    variables,
  }: GraphQlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> =>
    graphQlRequest({
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
