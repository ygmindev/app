import {
  type UseGraphqlModel,
  type UseGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useGraphql/useGraphql.models';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { GRAPHQL, GRAPHQL_OPERATION } from '@lib/shared/graphql/graphql.constants';
import { graphqlQuery } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery';
import { type GraphqlQueryHttpParamsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';

export const useGraphql = ({ baseUri, ...params }: UseGraphqlParamsModel = {}): UseGraphqlModel => {
  const { post } = useApi({
    ...params,
    baseUri: {
      ...baseUri,
      host: baseUri?.host ?? process.env.SERVER_APP_HOST,
      pathname: baseUri?.pathname ?? `api/${GRAPHQL}`,
      port: baseUri?.port ?? process.env.PORT ?? process.env.SERVER_APP_PORT,
    },
  });

  const query = async <TResult, TParams, TName extends string = string>({
    fields,
    name,
    operation,
    params,
    variables,
  }: GraphqlQueryHttpParamsModel<TResult, TParams, TName>): Promise<TResult | null> =>
    graphqlQuery({
      fields,
      name,
      onQuery: async ({ query, variables }) =>
        post({
          params: { query, variables },
          url: '',
        }),
      operation,
      params,
      variables,
    });

  return {
    mutate: <TResult, TParams, TName extends string = string>({
      ...params
    }: GraphqlQueryHttpParamsModel<TResult, TParams, TName>): Promise<TResult | null> =>
      query({
        ...params,
        operation: GRAPHQL_OPERATION.MUTATION,
      }),

    query,
  };
};
