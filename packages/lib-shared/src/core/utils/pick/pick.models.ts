import type { DeepKeyModel } from '@lib/shared/core/core.models';
import type { _PickModel, _PickParamsModel } from '@lib/shared/core/utils/pick/_pick.models';

export interface PickParamsModel<TType extends object, TKeys extends Array<DeepKeyModel<TType>>>
  extends _PickParamsModel<TType, TKeys> {}

export type PickModel<TType extends object, TKeys extends Array<DeepKeyModel<TType>>> = _PickModel<
  TType,
  TKeys
>;
