import {
  type UseGraphQlModel,
  type UseGraphQlParamsModel,
} from '@lib/frontend/data/hooks/useGraphQl/useGraphQl.models';
import { graphQlQuery } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery';
import {
  type GraphQlHttpResponseModel,
  type GraphQlQueryHttpParamsModel,
} from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { error } from '@lib/shared/logging/utils/logger/logger';

export const useGraphQl = (params: UseGraphQlParamsModel = {}): UseGraphQlModel => {
  const { post } = useApi({ ...params, pathname: `api/${GRAPHQL}` });

  const postF = async <TParams, TResult, TName extends string = string>(
    params: TParams,
  ): Promise<Record<TName, TResult> | undefined> => {
    const result = (await post({ params, url: '' })) as GraphQlHttpResponseModel<TResult, TName>;
    const graphQlError = result?.errors?.at(0);
    if (graphQlError) {
      error(new HttpError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, graphQlError.message));
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
    }: GraphQlQueryHttpParamsModel<TParams, TResult, TName>): Promise<TResult | null> => {
      const queryF = graphQlQuery<TParams, TResult, TName>({
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
      params: Array<GraphQlQueryHttpParamsModel<TParams[number], TResult[number], TName[number]>>,
    ): Promise<Array<TResult[number]>> => {
      const paramsF = params.map(({ fields, name, params: queryParams, type, variables }) => ({
        query: graphQlQuery<TParams[number], TResult[number], TName[number]>({
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
