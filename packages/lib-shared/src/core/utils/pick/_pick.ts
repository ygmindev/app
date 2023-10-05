import pick from 'lodash/pick';

import { type _PickModel, type _PickParamsModel } from '#lib-shared/core/utils/pick/_pick.models';

export const _pick = <TType extends object, TKey extends string>(
  ...[value, keys]: _PickParamsModel<TType, TKey>
): _PickModel<TType, TKey> => pick(value, keys) as unknown as _PickModel<TType, TKey>;
