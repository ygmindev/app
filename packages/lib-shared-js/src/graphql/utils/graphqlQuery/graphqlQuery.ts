import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { formatQuery } from '@lib/shared/graphql/utils/formatQuery/formatQuery';
import {
  type GraphqlQueryModel,
  type GraphqlQueryParamsModel,
} from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const graphqlQuery = async <TResult, TParams, TName extends string = string>({
  fields,
  name,
  onQuery,
  operation,
  params,
  variables,
}: GraphqlQueryParamsModel<TResult, TParams, TName>): Promise<GraphqlQueryModel<TResult>> => {
  const queryString = formatQuery<TResult, TParams, TName>({
    fields,
    name,
    operation,
    params,
  });
  const variablesF = variables && cleanObject(variables);
  const result = await onQuery({
    query: queryString,
    variables: variablesF,
  });
  const graphqlError = result?.errors?.at(0)?.extensions as unknown as HttpError;
  if (graphqlError) {
    logger.trace(result);
    throw new HttpError(
      graphqlError.statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      graphqlError.message,
    );
  }
  return result?.data?.[name] ?? null;
};
