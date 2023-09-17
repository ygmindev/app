import { graphQlQuery } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery';
import { type GraphQlHttpResponseModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import {
  type GraphQlRequestModel,
  type GraphQlRequestParamsModel,
} from '#lib-frontend/data/utils/graphQlRequest/graphQlRequest.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { error } from '#lib-shared/logging/utils/logger/logger';

export const graphQlRequest = async <TParams, TResult, TName extends string = string>({
  fields,
  name,
  onRequest,
  params,
  type,
  variables,
}: GraphQlRequestParamsModel<TParams, TResult, TName>): Promise<GraphQlRequestModel<TResult>> => {
  const result = await onRequest({
    query: graphQlQuery<TParams, TResult, TName>({
      fields,
      name,
      params,
      type,
    }),
    variables: variables && cleanObject(variables),
  });
  const graphQlError = (result as GraphQlHttpResponseModel<unknown>)?.errors?.at(0);
  if (graphQlError) {
    error(graphQlError);
    // TODO: fix statuscode
    throw new HttpError(500, graphQlError.message);
  }
  return (result && result.data && (result.data[name] as TResult)) ?? null;
};
