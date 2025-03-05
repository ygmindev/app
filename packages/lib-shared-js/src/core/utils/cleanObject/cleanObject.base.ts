import { type StringKeyModel } from '@lib/shared/core/core.models';
import {
  CLEAN_OBJECT_KEYS,
  IGNORE_OBJECT_KEYS,
} from '@lib/shared/core/utils/cleanObject/cleanObject.constants';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '@lib/shared/core/utils/cleanObject/cleanObject.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isPrimitive } from '@lib/shared/core/utils/isPrimitive/isPrimitive';
import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
import every from 'lodash/every';
import isObject from 'lodash/isObject';

export const cleanObject = <TType extends unknown>(
  ...[value, options, depth = 0]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> => {
  if (isPrimitive(value)) {
    return value;
  }
  if (Array.isArray(value)) {
    return filterNil(value.map((vv) => cleanObject(vv as object, options, depth))) as TType;
  }
  if (
    isObject(value) &&
    (!options?.primitiveTypes || every(options?.primitiveTypes, (type) => !(value instanceof type)))
  ) {
    const valueF = (
      options?.objectTransformer ? options.objectTransformer(value, depth) : toPlainObject(value)
    ) as typeof value;
    (Object.keys(valueF as object) as Array<StringKeyModel<TType>>).forEach((k) => {
      // if (k === 'participants') {
      //   console.warn('@@@');
      //   console.warn(valueF[k]);
      // }
      let v = valueF[k];
      v = options?.keyValueTransformer ? (options.keyValueTransformer(v, k, depth) as typeof v) : v;
      if (CLEAN_OBJECT_KEYS.includes(k) || v === undefined) {
        delete valueF[k];
      } else if (!IGNORE_OBJECT_KEYS.includes(k)) {
        valueF[k] = cleanObject(v, options, depth + 1);
      }
    });
    return valueF;
  }
  return value;
};
