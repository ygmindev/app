import { useApi } from '#lib-frontend/http/hooks/useApi/useApi';
import {
  type UseGraphQlModel,
  type UseGraphQlParamsModel,
} from '#lib-frontend/http/hooks/useGraphQl/useGraphQl.models';
import { graphQlQuery } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery';
import {
  type GraphQlHttpParamsModel,
  type GraphQlHttpResponseModel,
  type GraphQlQueryHttpParamsModel,
} from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { GRAPHQL } from '#lib-shared/graphql/graphql.constants';

export const useGraphQl = (params: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  const { post } = useApi({ ...params, path: `api/${GRAPHQL}` });
  return {
    query: async <TParams, TResult, TName extends string = string>({
      fields,
      name,
      params: queryParams,
      type,
      variables,
    }: GraphQlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
      const result = await post<
        GraphQlHttpParamsModel<TParams>,
        GraphQlHttpResponseModel<TResult, TName>
      >({
        params: {
          query: graphQlQuery<TParams, TResult, TName>({ fields, name, params: queryParams, type }),
          variables: cleanObject(variables),
        },
        path: '',
      });
      return (result && result.data && result.data[name]) || null;
    },
  };
};
