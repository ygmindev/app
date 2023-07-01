import { graphQlQuery } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery';
import { type GraphQlHttpResponseModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import {
  type GraphQlRequestModel,
  type GraphQlRequestParamsModel,
} from '#lib-frontend/http/utils/graphQlRequest/graphQlRequest.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { type HttpReponseModel } from '#lib-shared/http/utils/HttpService/HttpService.models';
import { error } from '#lib-shared/logging/utils/logger/logger';

export const graphQlRequest = async <TParams, TResult, TName extends string = string>({
  fields,
  name,
  onRequest,
  params,
  type,
  variables,
}: GraphQlRequestParamsModel<TParams, TResult, TName>): GraphQlRequestModel<TResult> => {
  const result = await onRequest({
    query: graphQlQuery<TParams, TResult, TName>({
      fields,
      name,
      params,
      type,
    }),
    variables: variables && cleanObject(variables),
  });
  console.warn(result);

  const graphQlError = (
    result as HttpReponseModel<GraphQlHttpResponseModel<unknown>>
  ).data?.errors?.at(0);
  if (graphQlError) {
    error(graphQlError);
    // TODO: fix statuscode
    throw new HttpError(500, graphQlError.message);
  }

  return (result && result.data && (result.data[name] as TResult)) ?? null;
};
