import type {
  Constructor,
  Get,
  Merge,
  OptionalKeysOf,
  PartialDeep,
  Primitive,
  RequiredKeysOf,
  TupleToUnion,
  UnionToIntersection,
  ValueOf,
} from 'type-fest';

export interface ConstructorModel<TType = object> extends Constructor<TType> {}

export type PrimitiveModel = Primitive | Date;

export type PartialModel<TType> = Partial<TType> | TType;

export type PartialDeepModel<TType> = PartialDeep<TType>;

export type RequiredModel<TType> = Required<TType>;

export type CallableModel<TResult = void, TParams = void> = (args?: TParams | undefined) => TResult;

export type CallablePromiseModel<TResult = void, TParams = void> = CallableModel<
  Promise<TResult>,
  TParams
>;

export type CallableArgsModel<TResult = void, TParams extends Array<unknown> = Array<unknown>> = (
  ...args: TParams
) => TResult;

export type CallableArgsPromiseModel<
  TResult = void,
  TParams extends Array<unknown> = Array<unknown>,
> = CallableArgsModel<Promise<TResult>, TParams>;

export type ReturnTypeModel<TType> = TType extends CallablePromiseModel<infer TReturn>
  ? Awaited<TReturn>
  : TType extends
      | CallableModel<infer TReturn>
      | CallableArgsModel<infer TReturn>
      | CallableArgsPromiseModel<infer TReturn>
  ? TReturn
  : TType;

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

export type ValuesModel<TType> = ValueOf<TType>;

export type GetModel<TType extends object, TKey extends DeepKeyModel<TType>> = Get<TType, TKey>;

export type DeepKeyModel<TType extends object> = {
  [TKey in keyof RequiredModel<TType> &
    (string | number)]: RequiredModel<TType>[TKey] extends object
    ? `${TKey}` | `${TKey}.${DeepKeyModel<RequiredModel<TType>[TKey]>}`
    : `${TKey}`;
}[keyof RequiredModel<TType> & (string | number)];
