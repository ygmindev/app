import { type GraphQLError } from 'graphql';

import {
  type DepthArray,
  type InferModel,
  type PrimitiveModel,
  type RequiredModel,
  type StringKeyModel,
  type UnionToIntersectionModel,
} from '#lib-shared/core/core.models';
import { type GraphQlOperationTypeModel } from '#lib-shared/graphql/graphql.models';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';

export type GraphQlParamsModel<TParams> = {
  query: string;
  variables?: TParams;
};

export type GraphQlQueryHttpParamsModel<TParams, TResult, TName extends string = string> = {
  variables?: TParams;
} & GraphQlQueryParamsModel<TParams, TResult, TName>;

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
      [TKey in StringKeyModel<RequiredModel<TType>>]?: RequiredModel<TType>[TKey] extends
        | PrimitiveModel
        | Array<PrimitiveModel>
        ? TKey
        : RequiredModel<TType>[TKey] extends Array<infer TElement>
        ? Array<GraphQlFieldModel<TElement, DepthArray[TDepth]>>
        : RequiredModel<TType>[TKey] extends ConnectionModel<infer TResource>
        ? Record<
            TKey,
            | Array<GraphQlFieldModel<TResource, DepthArray[TDepth]>>
            | GraphQlFragmentFieldModel<TResource>
          >
        : RequiredModel<TType>[TKey] extends object
        ? Record<TKey, Array<GraphQlFieldModel<RequiredModel<TType>[TKey], DepthArray[TDepth]>>>
        : never;
    }[StringKeyModel<RequiredModel<TType>>];

export type GraphQlQueryParamsFieldsModel<TType> = Array<GraphQlFieldModel<TType>>;

export type GraphQlQueryParamsModel<TParams, TResult, TName extends string = string> = {
  fields: GraphQlQueryParamsFieldsModel<TResult>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type: GraphQlOperationTypeModel;
};

export type GraphQlQueryModel = string;
