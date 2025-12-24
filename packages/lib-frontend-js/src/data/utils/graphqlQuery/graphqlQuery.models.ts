import {
  type DepthArray,
  type InferModel,
  type PrimitiveModel,
  type StringKeyModel,
  type UnionToIntersectionModel,
} from '@lib/shared/core/core.models';
import { type GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { type GraphQLError } from 'graphql';

export type GraphqlParamsModel<TParams> = {
  query: string;
  variables?: TParams;
};

export type GraphqlQueryHttpParamsModel<
  TResult,
  TParams,
  TName extends string = string,
> = GraphqlQueryParamsModel<TResult, TParams, TName> & {
  variables?: TParams;
};

export type GraphqlHttpResponseModel<TResult, TName extends string = string> = {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
};

export type GraphqlFragmentFieldModel<TType> = Record<
  string,
  Array<GraphqlFieldModel<UnionToIntersectionModel<InferModel<TType>>>>
>;

export type GraphqlFieldModel<TType, TDepth extends number = 10> = [TDepth] extends [0]
  ? never
  : {
      [TKey in StringKeyModel<InferModel<TType>>]?: Required<InferModel<TType>>[TKey] extends
        | PrimitiveModel
        | Array<PrimitiveModel>
        ? TKey
        : Required<InferModel<TType>>[TKey] extends Array<infer TElement>
          ? Record<TKey, Array<GraphqlFieldModel<TElement, DepthArray[TDepth]>>>
          : Record<
              TKey,
              Array<GraphqlFieldModel<Required<InferModel<TType>>[TKey], DepthArray[TDepth]>>
            >;
    }[StringKeyModel<InferModel<TType>>];

export type GraphqlQueryParamsFieldsModel<TType> = Array<GraphqlFieldModel<TType>>;

export type GraphqlQueryParamsModel<TResult, TParams, TName extends string = string> = {
  fields: GraphqlQueryParamsFieldsModel<TResult>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type?: GRAPHQL_OPERATION_TYPE;
};

export type GraphqlQueryModel = string;
