import get from 'lodash/get';

import { type DeepKeyModel } from '#lib-shared/core/core.models';
import { type _PickModel, type _PickParamsModel } from '#lib-shared/core/utils/pick/_pick.models';

export const _pick = <TType extends object, TKeys extends Array<DeepKeyModel<TType>>>(
  ...[value, keys]: _PickParamsModel<TType, TKeys>
): _PickModel<TType, TKeys> => get(value, keys) as _PickModel<TType, TKeys>;
