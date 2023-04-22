import type { DeepKeyModel } from '@lib/shared/core/core.models';
import type { _PickModel, _PickParamsModel } from '@lib/shared/core/utils/pick/_pick.models';
import pick from 'lodash/pick';

export const _pick = <TType extends object, TKeys extends Array<DeepKeyModel<TType>>>({
  keys,
  value,
}: _PickParamsModel<TType, TKeys>): _PickModel<TType, TKeys> =>
  pick(value, keys) as _PickModel<TType, TKeys>;
