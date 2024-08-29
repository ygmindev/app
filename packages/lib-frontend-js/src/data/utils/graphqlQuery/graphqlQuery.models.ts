import {
  type DepthArray,
  type InferModel,
  type PrimitiveModel,
  type RequiredModel,
  type StringKeyModel,
  type UnionToIntersectionModel,
} from '@lib/shared/core/core.models';
import { type GraphqlOperationTypeModel } from '@lib/shared/graphql/graphql.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type GraphQLError } from 'graphql';

export type GraphqlParamsModel<TParams> = {
  query: string;
  variables?: TParams;
};

export type GraphqlQueryHttpParamsModel<
  TParams,
  TResult,
  TName extends string = string,
> = GraphqlQueryParamsModel<TParams, TResult, TName> & {
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
      [TKey in StringKeyModel<InferModel<TType>>]?: RequiredModel<InferModel<TType>>[TKey] extends
        | PrimitiveModel
        | Array<PrimitiveModel>
        ? TKey
        : RequiredModel<InferModel<TType>>[TKey] extends Array<infer TElement>
          ? Record<TKey, Array<GraphqlFieldModel<TElement, DepthArray[TDepth]>>>
          : RequiredModel<InferModel<TType>>[TKey] extends ConnectionModel<infer TResource>
            ? Record<TKey, Array<GraphqlFieldModel<TResource, DepthArray[TDepth]>>>
            : Record<
                TKey,
                Array<GraphqlFieldModel<RequiredModel<InferModel<TType>>[TKey], DepthArray[TDepth]>>
              >;
    }[StringKeyModel<InferModel<TType>>];

export type GraphqlQueryParamsFieldsModel<TType> = Array<GraphqlFieldModel<TType>>;

export type GraphqlQueryParamsModel<TParams, TResult, TName extends string = string> = {
  fields: GraphqlQueryParamsFieldsModel<TResult>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type: GraphqlOperationTypeModel;
};

export type GraphqlQueryModel = string;
