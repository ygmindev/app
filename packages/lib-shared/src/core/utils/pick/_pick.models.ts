import { type Get } from 'type-fest';

import { type DeepKeyModel } from '#lib-shared/core/core.models';

export type _PickParamsModel<TType extends object, TKeys extends Array<DeepKeyModel<TType>>> = [
  value: TType,
  keys: TKeys,
];

export type _PickModel<TType extends object, TKeys extends Array<DeepKeyModel<TType>>> = {
  [TKey in TKeys[number]]: Get<TType, TKey>;
};
