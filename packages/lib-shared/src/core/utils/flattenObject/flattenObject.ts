import { type FlattenObjectParams } from '@lib/shared/core/utils/flattenObject/flattenObject.models';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

export const flattenObject = (
  ...[value, { delimiter = '.', path = [], prefixes = ['$'] } = {}]: FlattenObjectParams
): object =>
  (isPlainObject(value)
    ? reduce(
        value as unknown as object,
        (result, v, k) =>
          isArray(v)
            ? {
                ...result,
                [k]: (v as Array<object>).map((vv) =>
                  flattenObject(vv, { delimiter, path, prefixes }),
                ),
              }
            : some(prefixes, (prefix) => k.startsWith(prefix))
              ? { ...result, [[...path, k].join(delimiter)]: v }
              : {
                  ...result,
                  ...flattenObject(v, { delimiter, path: [...path, k], prefixes }),
                },
        {},
      )
    : path.length
      ? { [path.join(delimiter)]: value }
      : value) as object;
