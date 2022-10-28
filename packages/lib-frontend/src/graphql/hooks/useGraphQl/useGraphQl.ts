import type {
  GraphQlHttpParamsModel,
  GraphQlHttpResponseModel,
  GraphQlQueryHttpParamsModel,
  UseGraphQlModel,
  UseGraphQlParamsModel,
} from '@lib/frontend/graphql/hooks/useGraphQl/useGraphQl.models';
import { graphQlQuery } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { print } from 'graphql/language/printer';
import { gql } from 'graphql-tag';
import { useState } from 'react';

export const useGraphQl = (useApiParams: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { post } = useApi({ ...useApiParams, path: `api/${GRAPHQL}` });

  return {
    isLoading,

    query: async <TParams, TResult, TName extends string = string>({
      fields,
      name,
      params,
      type,
      variables,
    }: GraphQlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
      setIsLoading(true);

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
      }).finally(async () => setIsLoading(false));

      return (result && result.data && result.data[name]) || null;
    },
  };
};
