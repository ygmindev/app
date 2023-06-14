import type { GraphQLError } from 'graphql';

import type {
  InferModel,
  PrimitiveModel,
  RequiredModel,
  UnionToIntersectionModel,
} from '#lib-shared/core/core.models';
import type { GraphQlOperationTypeModel } from '#lib-shared/graphql/graphql.models';
import type { ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';

export interface GraphQlHttpParamsModel<TParams> {
  query: string;
  variables?: TParams;
}

export interface GraphQlQueryHttpParamsModel<TParams, TResult, TName extends string = string>
  extends GraphQlQueryParamsModel<TParams, TResult, TName> {
  variables?: TParams;
}

export interface GraphQlHttpResponseModel<TResult, TName extends string = string> {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
}

export type GraphQlFragmentFieldModel<TType, TStrict extends boolean = true> = Record<
  string,
  Array<GraphQlFieldModel<UnionToIntersectionModel<InferModel<TType>>, TStrict>>
>;

export type GraphQlFieldModel<
  TType,
  TStrict extends boolean = true,
  TInfer = RequiredModel<InferModel<TType>>,
> =
  | {
      [TKey in keyof TInfer]?: TInfer[TKey] extends PrimitiveModel
        ? TKey
        : TStrict extends true
        ? Record<TKey, Array<GraphQlFieldModel<TInfer[TKey], TStrict>>>
        : TInfer[TKey] extends ConnectionModel<infer TResource>
        ? Record<
            TKey,
            Array<GraphQlFieldModel<TResource, TStrict>> | GraphQlFragmentFieldModel<TResource>
          >
        : Record<
            TKey,
            Array<GraphQlFieldModel<TInfer[TKey]>> | GraphQlFragmentFieldModel<TInfer[TKey]>
          >;
    }[keyof TInfer];

export type GraphQlQueryParamsFieldsModel<TType, TStrict extends boolean = true> = Array<
  GraphQlFieldModel<TType, TStrict>
>;

export interface GraphQlQueryParamsModel<TParams, TResult, TName extends string = string> {
  fields: GraphQlQueryParamsFieldsModel<TResult>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type: GraphQlOperationTypeModel;
}

export type GraphQlQueryModel = string;
