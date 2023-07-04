import {
  type Class,
  type Get,
  type Merge,
  type OptionalKeysOf,
  type PartialDeep,
  type Primitive,
  type RequiredKeysOf,
  type TupleToUnion,
  type UnionToIntersection,
  type ValueOf,
} from 'type-fest';

import { type BOOLEAN_STRING } from '#lib-shared/core/core.constants';

export type ClassModel<TType = object> = Class<TType>;

export type PrototypeModel<TType> = TType extends ClassModel<infer TClass> ? TClass : never;

export type PrimitiveModel = Primitive | Date;

export type PartialModel<TType> = Partial<TType> | TType;

export type PartialDeepModel<TType> = PartialDeep<TType>;

export type RequiredModel<TType> = Required<TType>;

export type EmptyObjectModel = Record<string, never>;

export type BooleanStringModel = `${BOOLEAN_STRING}`;

export type CallableModel<TResult = void, TParams = void> = (args: TParams) => TResult;

export type OptionalCallableModel<TResult = void, TParams = void> = (
  args?: TParams | undefined,
) => TResult;

export type OptionalCallablePromiseModel<TResult = void, TParams = void> = OptionalCallableModel<
  Promise<Awaited<TResult>>,
  TParams
>;

export type CallablePromiseModel<TResult = void, TParams = void> = CallableModel<
  Promise<Awaited<TResult>>,
  TParams
>;

export type RequiredCallablePromiseModel<TResult = void, TParams = void> = CallableModel<
  Promise<Awaited<TResult>>,
  TParams
>;

export type ArrayCallableModel<TResult = void, TParams extends Array<unknown> = never> = (
  ...args: TParams
) => TResult;

export type ArrayCallablePromiseModel<
  TResult = void,
  TParams extends Array<unknown> = Array<unknown>,
> = ArrayCallableModel<Promise<TResult>, TParams>;

export type ReturnTypeModel<TType> = TType extends OptionalCallablePromiseModel<infer TReturn>
  ? Awaited<TReturn>
  : TType extends
      | OptionalCallableModel<infer TReturn>
      | ArrayCallableModel<infer TReturn>
      | ArrayCallablePromiseModel<infer TReturn>
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
