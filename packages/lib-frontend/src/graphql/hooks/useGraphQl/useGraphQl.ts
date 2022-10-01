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

export const useGraphQl = ({ onError, ...params }: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { post } = useApi({ ...params, onError, path: `api/${GRAPHQL}` });

  return {
    isLoading,

    query: async <TParams, TResult, TName extends string = string, TError extends Error = Error>({
      fields,
      name,
      onError,
      params,
      type,
      variables,
    }: GraphQlQueryHttpParamsModel<TParams, TResult, TName, TError>): Promise<TResult | null> => {
      setIsLoading(true);

      const result = await post<
        GraphQlHttpParamsModel<TParams>,
        GraphQlHttpResponseModel<TName, TResult>,
        TError
      >({
        onError,
        params: {
          query: print(gql`
            ${graphQlQuery<TParams, TResult, TName>({ fields, name, params, type })}
          `),
          variables,
        },
        path: '/',
      }).finally(async () => setIsLoading(false));

      if (result) {
        const error = result.errors && result.errors[0];
        if (error) {
          const e = new Error(error.message);
          e.name = error.extensions.code;
          if (onError) {
            onError(e as TError);
          } else {
            throw e;
          }
        }
        return (result.data && result.data[name]) || null;
      }
      return null;
    },
  };
};
