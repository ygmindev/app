import {
  type DepthArray,
  type InferModel,
  type PrimitiveModel,
  type RequiredModel,
  type StringKeyModel,
  type UnionToIntersectionModel,
} from '@lib/shared/core/core.models';
import { type GraphQlOperationTypeModel } from '@lib/shared/graphql/graphql.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type GraphQLError } from 'graphql';

export type GraphQlParamsModel<TParams> = {
  query: string;
  variables?: TParams;
};

export type GraphQlQueryHttpParamsModel<
  TParams,
  TResult,
  TName extends string = string,
> = GraphQlQueryParamsModel<TParams, TResult, TName> & {
  variables?: TParams;
};

export type GraphQlHttpResponseModel<TResult, TName extends string = string> = {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
};

export type GraphQlFragmentFieldModel<TType> = Record<
  string,
  Array<GraphQlFieldModel<UnionToIntersectionModel<InferModel<TType>>>>
>;

export type GraphQlFieldModel<TType, TDepth extends number = 10> = [TDepth] extends [0]
  ? never
  : {
      [TKey in StringKeyModel<InferModel<TType>>]?: RequiredModel<InferModel<TType>>[TKey] extends
        | PrimitiveModel
        | Array<PrimitiveModel>
        ? TKey
        : RequiredModel<InferModel<TType>>[TKey] extends Array<infer TElement>
          ? Record<TKey, Array<GraphQlFieldModel<TElement, DepthArray[TDepth]>>>
          : RequiredModel<InferModel<TType>>[TKey] extends ConnectionModel<infer TResource>
            ? Record<TKey, Array<GraphQlFieldModel<TResource, DepthArray[TDepth]>>>
            : Record<
                TKey,
                Array<GraphQlFieldModel<RequiredModel<InferModel<TType>>[TKey], DepthArray[TDepth]>>
              >;
    }[StringKeyModel<InferModel<TType>>];

export type GraphQlQueryParamsFieldsModel<TType> = Array<GraphQlFieldModel<TType>>;

export type GraphQlQueryParamsModel<TParams, TResult, TName extends string = string> = {
  fields: GraphQlQueryParamsFieldsModel<TResult>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type: GraphQlOperationTypeModel;
};

export type GraphQlQueryModel = string;
