import type {
  GraphQlHttpParamsModel,
  GraphQlHttpResponseModel,
  GraphQlQueryHttpParamsModel,
  UseGraphQlModel,
  UseGraphQlParamsModel,
} from '@lib/frontend/http/hooks/useGraphQl/useGraphQl.models';
import { graphQlQuery } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { print } from 'graphql/language/printer';
import { gql } from 'graphql-tag';

export const useGraphQl = (useApiParams: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  const { post } = useApi({ ...useApiParams, path: `api/${GRAPHQL}` });

  return {
    query: async <TParams, TResult, TName extends string = string>({
      fields,
      name,
      params,
      type,
      variables,
    }: GraphQlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
      const result = await post<
        GraphQlHttpParamsModel<TParams>,
        GraphQlHttpResponseModel<TName, TResult>
      >({
        params: {
          query: print(gql`
            ${graphQlQuery<TParams, TResult, TName>({ fields, name, params, type })}
          `),
          variables,
        },
        path: '',
      });
      return (result && result.data && result.data[name]) || null;
    },
  };
};
