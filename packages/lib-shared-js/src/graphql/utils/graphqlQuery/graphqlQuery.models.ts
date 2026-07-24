import {
  type DepthArray,
  type InferModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type FormatQueryParamsModel } from '@lib/shared/graphql/utils/formatQuery/formatQuery.models';
import { type GraphQLError } from 'graphql';

export type GraphqlParamsModel<TParams> = {
  query: string;
  variables?: TParams;
};

export type GraphqlQueryHttpParamsModel<
  TResult,
  TParams,
  TName extends string = string,
> = FormatQueryParamsModel<TResult, TParams, TName> & {
  variables?: TParams;
};

export type GraphqlHttpResponseModel<TResult, TName extends string = string> = {
  data?: Record<TName, TResult>;
  errors?: Array<GraphQLError>;
};

export type GraphqlFieldModel<TType, TDepth extends number = 10> = [TDepth] extends [0]
  ? unknown
  : {
      [TKey in StringKeyModel<InferModel<TType>>]?: Required<InferModel<TType>>[TKey] extends
        PrimitiveModel | Array<PrimitiveModel>
        ? TKey
        : Required<InferModel<TType>>[TKey] extends Array<infer TElement>
          ? Record<TKey, Array<GraphqlFieldModel<TElement, DepthArray[TDepth]>>>
          : Record<
              TKey,
              Array<GraphqlFieldModel<Required<InferModel<TType>>[TKey], DepthArray[TDepth]>>
            >;
    }[StringKeyModel<InferModel<TType>>];

export type GraphqlQueryParamsFieldsModel<TType> = Array<GraphqlFieldModel<TType>>;

export type GraphqlQueryParamsModel<
  TResult,
  TParams,
  TName extends string = string,
> = GraphqlQueryHttpParamsModel<TResult, TParams, TName> & {
  onQuery(
    params: GraphqlParamsModel<TParams>,
  ): Promise<GraphqlHttpResponseModel<TResult, TName> | null>;
};

export type GraphqlQueryModel<TResult> = TResult | null;
