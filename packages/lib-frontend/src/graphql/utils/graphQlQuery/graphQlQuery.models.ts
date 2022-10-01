import type { InferModel } from '@lib/shared/core/core.models';
import type { GraphQlOperationTypeModel } from '@lib/shared/graphql/graphql.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResultModel } from '@lib/shared/resource/utils/Result/Result.models';
import type { GraphQLError } from 'graphql';
import type { Primitive } from 'type-fest';

export interface GraphQlHttpResponseModel<TResult, TName extends string = string> {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
}

export type GraphQlFieldModel<TType, TInfer = Required<InferModel<TType>>> =
  | {
      [TKey in keyof TInfer]?: TInfer[TKey] extends Primitive | Date
        ? TKey
        : Record<TKey, undefined | Array<GraphQlFieldModel<Required<TInfer[TKey]>>>>;
    }[keyof TInfer];

// type TType = {
//   result: { _id: string };
// };

type TType = {
  result: ResultModel<RESOURCE_METHOD_TYPE.CREATE, { _id: string }>;
};

const x: Array<GraphQlFieldModel<TType>> = [
  // 'result'
  { result: ['_id'] },
];

export interface GraphQlQueryParamsModel<TParams, TResult, TName extends string = string> {
  fields: Array<GraphQlFieldModel<TResult>>;
  name: TName;
  params?: { [TKey in keyof TParams]?: string };
  type: GraphQlOperationTypeModel;
}
