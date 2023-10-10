import every from 'lodash/every';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

import { type StringKeyModel } from '#lib-shared/core/core.models';
import { CLEAN_OBJECT_KEYS } from '#lib-shared/core/utils/cleanObject/cleanObject.constants';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '#lib-shared/core/utils/cleanObject/cleanObject.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { isPrimitive } from '#lib-shared/core/utils/isPrimitive/isPrimitive';
import { toPlainObject } from '#lib-shared/core/utils/toPlainObject/toPlainObject';

export const cleanObject = <TType extends unknown>(
  ...[value, options]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> => {
  if (isPrimitive(value)) {
    return value;
  }
  if (isArray(value)) {
    return filterNil(value.map((vv) => cleanObject(vv as object, options))) as TType;
  }
  if (
    isObject(value) &&
    (!options?.primitiveTypes || every(options?.primitiveTypes, (type) => !(value instanceof type)))
  ) {
    const valueF = toPlainObject(value);
    (Object.keys(valueF) as Array<StringKeyModel<TType>>).forEach((k) => {
      let v = valueF[k];
      v = (options?.additionalTransformer ? options.additionalTransformer(v, k) : v) as typeof v;
      if (CLEAN_OBJECT_KEYS.includes(k) || v === undefined) {
        delete valueF[k];
      } else {
        valueF[k] = cleanObject(v, options);
      }
    });
    return valueF;
  }
  return value;
};
