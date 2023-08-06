import { type DeepKeyModel } from '#lib-shared/core/core.models';
import { type _PickModel, type _PickParamsModel } from '#lib-shared/core/utils/pick/_pick.models';

export type PickParamsModel<
  TType extends object,
  TKeys extends Array<DeepKeyModel<TType>>,
> = _PickParamsModel<TType, TKeys>;

export type PickModel<TType extends object, TKeys extends Array<DeepKeyModel<TType>>> = _PickModel<
  TType,
  TKeys
>;
