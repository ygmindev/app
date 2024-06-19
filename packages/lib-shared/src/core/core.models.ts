import { type BOOLEAN_STRING } from '@lib/shared/core/core.constants';
import {
  type Class,
  type ConditionalKeys,
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

export type ClassModel<TType = object> = Class<TType>;

export type PrototypeModel<TType> = TType extends ClassModel<infer TPrototype> ? TPrototype : never;

export type PrimitiveModel = Primitive | Date;

export type PartialModel<TType> = Partial<NonNullable<TType>>;

export type PartialDeepModel<TType> = PartialDeep<TType>;

export type RequiredModel<TType> = Required<TType>;

export type EmptyObjectModel = Record<string, unknown>;

export type NilModel = false | undefined | null | '';

export type NillableArrayModel<TType> = Array<TType | NilModel>;

export type BooleanStringModel = `${BOOLEAN_STRING}`;

export type DecoratorModel =
  | ClassDecorator
  | MethodDecorator
  | ParameterDecorator
  | PropertyDecorator;

export type CallableModel = (args?: Array<unknown>) => unknown;

export type ReturnTypeModel<TType> = TType extends
  | ((args?: unknown) => infer TReturn)
  | ((args?: unknown) => Promise<infer TReturn>)
  | ((args?: unknown) => Array<infer TReturn>)
  | ((args?: unknown) => Promise<Array<infer TReturn>>)
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

export type StringKeyModel<TType> = Extract<keyof RequiredModel<TType>, string>;

export type ExtractPropertiesModel<TType, TParams> = ConditionalKeys<TType, TParams>;

// TODO: cleanup if possible?
export type DepthArray = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export type DeepKeyModel<TType, TDepth extends number = 10> = [TDepth] extends [0]
  ? never
  :
      | StringKeyModel<TType>
      | {
          [TKey in StringKeyModel<TType>]: RequiredModel<TType>[TKey] extends object
            ? `${TKey}.${DeepKeyModel<RequiredModel<TType>[TKey], DepthArray[TDepth]>}`
            : `${TKey}`;
        }[StringKeyModel<TType>];
