import { type DeepKeyModel } from '#lib-shared/core/core.models';
import { _pick } from '#lib-shared/core/utils/pick/_pick';
import { type PickModel, type PickParamsModel } from '#lib-shared/core/utils/pick/pick.models';

export const pick = <TType extends object, TKeys extends Array<DeepKeyModel<TType>>>(
  ...params: PickParamsModel<TType, TKeys>
): PickModel<TType, TKeys> => _pick<TType, TKeys>(...params);
