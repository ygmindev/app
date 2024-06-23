import {
  type UseGraphqlModel,
  type UseGraphqlParamsModel,
} from '@lib/frontend/data/hooks/useGraphql/useGraphql.models';
import { graphqlQuery } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery';
import {
  type GraphqlHttpResponseModel,
  type GraphqlQueryHttpParamsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const useGraphql = (params: UseGraphqlParamsModel = {}): UseGraphqlModel => {
  const { post } = useApi({ ...params, pathname: `api/${GRAPHQL}` });

  const postF = async <TParams, TResult, TName extends string = string>(
    params: TParams,
  ): Promise<Record<TName, TResult> | undefined> => {
    const result = (await post({ params, url: '' })) as GraphqlHttpResponseModel<TResult, TName>;
    const graphqlError = result?.errors?.at(0)?.extensions as unknown as HttpError;
    if (graphqlError) {
      throw new HttpError(
        graphqlError.statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        graphqlError.message,
      );
    }
    return result && result.data;
  };

  return {
    query: async <TParams, TResult, TName extends string = string>({
      fields,
      name,
      params: queryParams,
      type,
      variables,
    }: GraphqlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
      const queryF = graphqlQuery<TParams, TResult, TName>({
        fields,
        name,
        params: queryParams,
        type,
      });
      const variablesF = variables && cleanObject(variables);
      const result = await postF<{ query: string; variables?: TParams }, TResult, TName>({
        query: queryF,
        variables: variablesF,
      });
      return result?.[name] ?? null;
    },

    queryBatches: async <
      TParams extends Array<unknown>,
      TResult extends Array<unknown>,
      TName extends Array<string> = Array<string>,
    >(
      params: Array<GraphqlQueryHttpParamsModel<TParams[number], TResult[number], TName[number]>>,
    ): Promise<Array<TResult[number]>> => {
      const paramsF = params.map(({ fields, name, params: queryParams, type, variables }) => ({
        query: graphqlQuery<TParams[number], TResult[number], TName[number]>({
          fields,
          name,
          params: queryParams,
          type,
        }),
        variables,
      }));
      const result = await postF<
        Array<{ query: string; variables?: TParams[number] }>,
        TResult[number],
        TName[number]
      >(paramsF);
      return params.map(({ name }) => result?.[name]);
    },
  };
};
