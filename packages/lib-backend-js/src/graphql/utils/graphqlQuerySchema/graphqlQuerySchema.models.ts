import { type _GraphqlConfigModel } from '@lib/config/graphql/graphql.models';
import { type GraphqlQueryHttpParamsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';

export type GraphqlQuerySchemaParamsModel<
  TResult,
  TParams,
  TName extends string = string,
> = GraphqlQueryHttpParamsModel<TResult, TParams, TName> & {
  schema: _GraphqlConfigModel;
};

export type GraphqlQuerySchemaModel<TResult> = TResult | null;
