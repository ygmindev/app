import { type ExecutionResult, type GraphQLArgs } from 'graphql';
import { graphql } from 'graphql';

import { _config } from '#lib-config/graphql/graphql';
import {
  type UseAppGraphQlModel,
  type UseAppGraphQlParamsModel,
} from '#lib-frontend/http/hooks/useAppGraphQl/useAppGraphQl.models';
import { type GraphQlQueryHttpParamsModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import { graphQlRequest } from '#lib-frontend/http/utils/graphQlRequest/graphQlRequest';

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
