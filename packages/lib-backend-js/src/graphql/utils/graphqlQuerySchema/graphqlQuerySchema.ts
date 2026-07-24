import {
  type GraphqlQuerySchemaModel,
  type GraphqlQuerySchemaParamsModel,
} from '@lib/backend/graphql/utils/graphqlQuerySchema/graphqlQuerySchema.models';
import { graphqlQuery } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery';
import { type GraphqlHttpResponseModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { graphql } from 'graphql';

export const graphqlQuerySchema = async <TResult, TParams, TName extends string = string>({
  fields,
  name,
  operation,
  params,
  schema,
  variables,
}: GraphqlQuerySchemaParamsModel<TResult, TParams, TName>): Promise<
  GraphqlQuerySchemaModel<TResult>
> =>
  graphqlQuery({
    fields,
    name,
    onQuery: async ({ query, variables }) =>
      graphql({
        schema,
        source: query,
        variableValues: variables as Record<string, unknown>,
      }) as GraphqlHttpResponseModel<TResult, TName> | null,
    operation,
    params,
    variables,
  });
