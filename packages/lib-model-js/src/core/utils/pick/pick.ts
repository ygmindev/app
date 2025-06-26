import { _pick } from '@lib/shared/core/utils/pick/_pick';
import { type PickModel, type PickParamsModel } from '@lib/shared/core/utils/pick/pick.models';

export const pick = <TType extends object, TKey extends string>(
  ...params: PickParamsModel<TType, TKey>
): PickModel<TType, TKey> => _pick<TType, TKey>(...params);
