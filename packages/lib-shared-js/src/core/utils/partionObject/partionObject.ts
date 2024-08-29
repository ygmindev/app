// COMPLETE
import {
  type PartionObjectModel,
  type PartionObjectParamsModel,
} from '@lib/shared/core/utils/partionObject/partionObject.models';
import reduce from 'lodash/reduce';

export const partionObject = <TType extends Record<string, unknown>>(
  ...[value, fn]: PartionObjectParamsModel<TType>
): PartionObjectModel<TType> =>
  reduce(
    value,
    (result, v, k) =>
      fn(v, k) ? [{ ...result[0], [k]: v }, result[1]] : [result[0], { ...result[1], [k]: v }],
    [{}, {}],
  );
