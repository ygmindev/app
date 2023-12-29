import {
  type UseGraphQlModel,
  type UseGraphQlParamsModel,
} from '#lib-frontend/data/hooks/useGraphQl/useGraphQl.models';
import {
  type GraphQlHttpResponseModel,
  type GraphQlParamsModel,
  type GraphQlQueryHttpParamsModel,
} from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { graphQlRequest } from '#lib-frontend/data/utils/graphQlRequest/graphQlRequest';
import { useApi } from '#lib-frontend/http/hooks/useApi/useApi';
import { GRAPHQL } from '#lib-shared/graphql/graphql.constants';

export const useGraphQl = (params: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  const { post } = useApi({ ...params, pathname: `api/${GRAPHQL}` });
  return {
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
          post<GraphQlParamsModel<TParams>, GraphQlHttpResponseModel<TResult, TName>>({
            params: [{ query, variables: variablesF }] as never,
            path: '',
          }),
        params: paramsF,
        type,
        variables,
      }),
  };
};
