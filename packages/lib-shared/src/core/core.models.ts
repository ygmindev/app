import type {
  Constructor,
  Merge,
  OptionalKeysOf,
  PartialDeep,
  Primitive,
  RequiredKeysOf,
  TupleToUnion,
  UnionToIntersection,
} from 'type-fest';

export interface ConstructorModel<TType = object> extends Constructor<TType> {}

export type PrimitiveModel = Primitive | Date;

export type PartialModel<TType> = Partial<TType> | TType;

export type PartialDeepModel<TType> = PartialDeep<TType>;

export type RequiredModel<TType> = Required<TType>;

export type CallableModel<TResult = void, TParams extends Array<unknown> = never> = (
  ...args: TParams
) => TResult;

export type CallablePromiseModel<
  TResult = void,
  TParams extends Array<unknown> = never,
> = CallableModel<Promise<TResult>, TParams>;

export type InferModel<TType> = TType extends Array<infer TElement> ? TElement : TType;

export type IntersectionModel<TType extends Array<unknown>> = TType extends [
  v: infer TValue,
  ...rest: infer TResult,
]
  ? TValue & IntersectionModel<TResult>
  : object;

export type UnionModel<TType extends Array<unknown>> = TupleToUnion<TType>;

export type UnionToIntersectionModel<TType> = UnionToIntersection<TType>;

export type OverrideModel<TType, TOverride> = Merge<TType, TOverride>;

export type RequiredKeysModel<TType> = RequiredKeysOf<TType & object>;

export type OptionalKeysModel<TType> = OptionalKeysOf<TType & object>;
