import type { BOOLEAN_VALUE } from '@lib/shared/core/core.constants';
import type { Function } from 'ts-toolbelt';
import type { Constructor, Get, PartialDeep, Primitive } from 'type-fest';

export interface ConstructorModel<TType = object> extends Constructor<TType> {}

export type PrimitiveModel = Primitive | Date;

export type PartialModel<TType> = Partial<TType> | TType;

export type PartialDeepModel<TType> = PartialDeep<TType>;

export type CallableModel<TParams extends Array<unknown> = never, TResult = void> = (
  ...args: TParams
) => TResult;

export type InferModel<TType> = TType extends Array<infer TElement> ? TElement : TType;

export type PathModel<TType, TKey extends string> = Function.AutoPath<TType, TKey>;

export type ValueTypeModel<TType, TKey extends string> = Get<TType, TKey, { strict: true }>;

export type BooleanValueModel = `${BOOLEAN_VALUE}`;

export type MergeArrayModel<TType extends Array<unknown>> = TType extends [
  v: infer TValue,
  ...rest: infer TResult,
]
  ? TValue & MergeArrayModel<TResult>
  : object;
