import { type GraphQLArgs } from 'graphql';
import { graphql } from 'graphql';

import { _config } from '#lib-config/graphql/graphql';
import {
  type UseAppGraphQlModel,
  type UseAppGraphQlParamsModel,
} from '#lib-frontend/http/hooks/useAppGraphQl/useAppGraphQl.models';
import { graphQlQuery } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery';
import { type GraphQlQueryHttpParamsModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const useAppGraphQl = ({}: UseAppGraphQlParamsModel = {}): UseAppGraphQlModel => ({
  query: async <TParams, TResult, TName extends string = string>({
    fields,
    name,
    params: queryParams,
    type,
    variables,
  }: GraphQlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
    const schema = _config();
    const result = await graphql({
      schema,
      source: graphQlQuery<TParams, TResult, TName>({ fields, name, params: queryParams, type }),
      variableValues: cleanObject(variables) as GraphQLArgs['variableValues'],
    });
    return (result && result.data && (result.data[name] as TResult)) || null;
  },
});
