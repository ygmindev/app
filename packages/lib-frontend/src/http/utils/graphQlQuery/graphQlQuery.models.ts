import type { InferModel, PrimitiveModel, RequiredModel } from '@lib/shared/core/core.models';
import type { GraphQlOperationTypeModel } from '@lib/shared/graphql/graphql.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import type { GraphQLError } from 'graphql';

export interface GraphQlHttpResponseModel<TResult, TName extends string = string> {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
}

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
        ? Record<TKey, Array<GraphQlFieldModel<TResource, TStrict>>>
        : Record<TKey, Array<GraphQlFieldModel<TInfer[TKey], TStrict>>>;
    }[keyof TInfer];

export interface GraphQlQueryParamsModel<TParams, TResult, TName extends string = string> {
  fields: Array<GraphQlFieldModel<TResult>>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type: GraphQlOperationTypeModel;
}

export type GraphQlQueryModel = string;
