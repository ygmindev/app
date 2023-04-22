import type { DeepKeyModel, GetModel } from '@lib/shared/core/core.models';

export interface _PickParamsModel<TType extends object, TKeys extends Array<DeepKeyModel<TType>>> {
  keys: TKeys;
  value: TType;
}

export type _PickModel<TType extends object, TKeys extends Array<DeepKeyModel<TType>>> = {
  [TKey in TKeys[number]]: GetModel<TType, TKey & string & number>;
};
