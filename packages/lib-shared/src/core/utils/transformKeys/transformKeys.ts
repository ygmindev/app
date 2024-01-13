import reduce from 'lodash/reduce';

import {
  type TransformKeysModel,
  type TransformKeysParamsModel,
} from '@lib-shared/core/utils/transformKeys/transformKeys.models';

export const transformKeys = <TType extends Record<string, unknown>>(
  ...[params, transform]: TransformKeysParamsModel<TType>
): TransformKeysModel<TType> =>
  reduce(
    params,
    (result, v, k) => ({ ...result, [transform(k)]: v }),
    {} as TransformKeysModel<TType>,
  );
