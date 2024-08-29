import { type _PickModel, type _PickParamsModel } from '@lib/shared/core/utils/pick/_pick.models';

export type PickParamsModel<TType extends object, TKey extends string> = _PickParamsModel<
  TType,
  TKey
>;

export type PickModel<TType extends object, TKey extends string> = _PickModel<TType, TKey>;
