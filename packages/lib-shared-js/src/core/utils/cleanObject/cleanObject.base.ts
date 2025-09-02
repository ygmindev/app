import { type StringKeyModel } from '@lib/shared/core/core.models';
import { IGNORE_OBJECT_KEYS } from '@lib/shared/core/utils/cleanObject/cleanObject.constants';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '@lib/shared/core/utils/cleanObject/cleanObject.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { isPrimitive } from '@lib/shared/core/utils/isPrimitive/isPrimitive';
import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';
import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import some from 'lodash/some';

export const cleanObject = <TType extends unknown>(
  ...[value, options, depth = 0]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> => {
  if (
    isPrimitive(value) ||
    some([...(options?.primitiveTypes ?? []), RegExp], (type) => isTypeOf(value, type))
  ) {
    return value;
  }
  if (isFunction(value)) {
    return null as TType;
  }
  if (isArray(value)) {
    return filterNil(value.map((vv) => cleanObject(vv as object, options, depth))) as TType;
  }
  if (isPlainObject(value)) {
    const valueF = toPlainObject(options?.objectTransformer?.(value, depth) ?? value);
    (Object.keys(valueF as object) as Array<StringKeyModel<TType>>).forEach((k) => {
      let v = valueF[k];
      !IGNORE_OBJECT_KEYS.includes(k) && (v = cleanObject(v, options, depth + 1));
      !!options?.keyValueTransformer && (v = options.keyValueTransformer(v, k, depth) as typeof v);
      if (isEmpty(v)) {
        delete valueF[k];
      } else {
        valueF[k] = v;
      }
    });
    return valueF;
  }
  return value;
};
