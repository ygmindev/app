import type { Constructor, Merge, PartialDeep, Primitive } from 'type-fest';

export interface ConstructorModel<TType = object> extends Constructor<TType> {}

export type PrimitiveModel = Primitive | Date;

export type PartialModel<TType> = Partial<TType> | TType;

export type PartialDeepModel<TType> = PartialDeep<TType>;

export type CallableModel<TResult = void, TParams extends Array<unknown> = never> = (
  ...args: TParams
) => TResult;

export type CallablePromiseModel<
  TResult = void,
  TParams extends Array<unknown> = never,
> = CallableModel<Promise<TResult>, TParams>;

export type InferModel<TType> = TType extends Array<infer TElement> ? TElement : TType;

export type MergeArrayModel<TType extends Array<unknown>> = TType extends [
  v: infer TValue,
  ...rest: infer TResult,
]
  ? TValue & MergeArrayModel<TResult>
  : object;

export type OverrideModel<TType, TOverride> = Merge<TType, TOverride>;
