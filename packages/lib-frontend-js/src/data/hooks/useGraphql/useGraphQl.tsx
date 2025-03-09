import {
  type UseGraphqlModel,
  type UseGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useGraphql/useGraphql.models';
import { graphqlQuery } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery';
import {
  type GraphqlHttpResponseModel,
  type GraphqlParamsModel,
  type GraphqlQueryHttpParamsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_RESPONSE_TYPE, HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const useGraphql = ({ query, ...params }: UseGraphqlParamsModel = {}): UseGraphqlModel => {
  const { post } = useApi(params);

  const queryF =
    query ??
    (async <TParams, TResult, TName extends string = string>({
      isStreaming,
      ...queryParams
    }: GraphqlParamsModel<TParams>): Promise<GraphqlHttpResponseModel<TResult, TName> | null> =>
      post({
        params: queryParams,
        request: isStreaming ? { responseType: HTTP_RESPONSE_TYPE.STREAM } : undefined,
        url: '',
      }) as GraphqlHttpResponseModel<TResult, TName>);

  return {
    query: async <TParams, TResult, TName extends string = string>({
      fields,
      name,
      params: queryParams,
      type,
      variables,
    }: GraphqlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
      const queryString = graphqlQuery<TParams, TResult, TName>({
        fields,
        name,
        params: queryParams,
        type,
      });
      const variablesF = variables && cleanObject(variables);
      const result = await queryF<TParams, TResult, TName>({
        isStreaming: type === GRAPHQL_OPERATION_TYPE.SUBSCRIPTION,
        query: queryString,
        variables: variablesF,
      });
      const graphqlError = result?.errors?.at(0)?.extensions as unknown as HttpError;
      if (graphqlError) {
        throw new HttpError(
          graphqlError.statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
          graphqlError.message,
        );
      }
      return result?.data?.[name] ?? null;
    },
  };
};
