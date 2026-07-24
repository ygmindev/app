import { type InferModel, type UnionToIntersectionModel } from '@lib/shared/core/core.models';
import { type GRAPHQL_OPERATION } from '@lib/shared/graphql/graphql.constants';
import {
  type GraphqlFieldModel,
  type GraphqlQueryParamsFieldsModel,
} from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';

export type GraphqlFragmentFieldModel<TType> = Record<
  string,
  Array<GraphqlFieldModel<UnionToIntersectionModel<InferModel<TType>>>>
>;

export type FormatQueryParamsModel<TResult, TParams, TName extends string = string> = {
  fields: GraphqlQueryParamsFieldsModel<TResult>;
  name: TName;
  operation?: GRAPHQL_OPERATION;
  params?: { [TKey in keyof TParams]?: string };
};

export type FormatQueryModel = string;
