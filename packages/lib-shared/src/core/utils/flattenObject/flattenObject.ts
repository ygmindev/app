import type { FlattenObjectParams } from '@lib/shared/core/utils/flattenObject/flattenObject.models';
import { isPlainObject, reduce, some } from 'lodash';

export const flattenObject = ({
  value,
  path = [],
  delimiter = '.',
  prefixes = ['$'],
}: FlattenObjectParams): object =>
  (isPlainObject(value)
    ? reduce(
        value as unknown as object,
        (result, v, k) =>
          some(prefixes, (prefix) => k.startsWith(prefix))
            ? { ...result, [[...path, k].join(delimiter)]: v }
            : {
                ...result,
                ...flattenObject({ delimiter, path: [...path, k], prefixes, value: v }),
              },
        {},
      )
    : path.length
    ? { [path.join(delimiter)]: value }
    : value) as object;
