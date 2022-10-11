import type { InferModel, PrimitiveModel } from '@lib/shared/core/core.models';
import type { GraphQlOperationTypeModel } from '@lib/shared/graphql/graphql.models';
import type { GraphQLError } from 'graphql';

export interface GraphQlHttpResponseModel<TResult, TName extends string = string> {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
}

// export type GraphQlFieldModel<TType, TInfer = Required<InferModel<TType>>> =
//   | {
//       [TKey in keyof TInfer]?: TInfer[TKey] extends Primitive | Date
//         ? TKey
//         : Record<TKey, Array<GraphQlFieldModel<Required<TInfer[TKey]>>>>;
//     }[keyof TInfer];

export type GraphQlFieldModel<TType, TInfer = Required<InferModel<TType>>> =
  | {
      [TKey in keyof TInfer]?: TInfer[TKey] extends PrimitiveModel
        ? TKey
        : Record<TKey, Array<GraphQlFieldModel<TInfer[TKey]>>>;
    }[keyof TInfer];

export interface GraphQlQueryParamsModel<TParams, TResult, TName extends string = string> {
  fields: Array<GraphQlFieldModel<TResult>>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type: GraphQlOperationTypeModel;
}
