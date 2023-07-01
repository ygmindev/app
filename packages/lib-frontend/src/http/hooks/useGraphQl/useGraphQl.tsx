import { useApi } from '#lib-frontend/http/hooks/useApi/useApi';
import {
  type UseGraphQlModel,
  type UseGraphQlParamsModel,
} from '#lib-frontend/http/hooks/useGraphQl/useGraphQl.models';
import {
  type GraphQlHttpResponseModel,
  type GraphQlParamsModel,
  type GraphQlQueryHttpParamsModel,
} from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import { graphQlRequest } from '#lib-frontend/http/utils/graphQlRequest/graphQlRequest';
import { GRAPHQL } from '#lib-shared/graphql/graphql.constants';

export const useGraphQl = (params: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  const { post } = useApi({ ...params, path: `api/${GRAPHQL}` });
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
            params: { query, variables: variablesF },
            path: '',
          }),
        params: paramsF,
        type,
        variables,
      }),
  };
};
