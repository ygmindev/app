import { CLEAN_OBJECT_KEYS } from '@lib/shared/core/utils/cleanObject/cleanObject.constants';
import { isPrimitive } from '@lib/shared/core/utils/isPrimitive/isPrimitive';
import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';
import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';

export const cleanObject = <TType extends unknown>(value: TType): TType => {
  if (isTypeOf(value, Date) || isTypeOf(value, 'ObjectId')) {
    return value;
  }
  const _value = isPlainObject(value) ? value : toPlainObject(value);
  Object.keys(_value as object).forEach((k) => {
    const v = (_value as Record<string, unknown>)[k];
    CLEAN_OBJECT_KEYS.includes(k)
      ? delete (_value as Record<string, unknown>)[k]
      : isArray(v)
      ? v.map(cleanObject)
      : isPrimitive(v)
      ? v === undefined && delete (_value as Record<string, unknown>)[k]
      : ((_value as Record<string, unknown>)[k] = cleanObject(v));
  });
  return _value;
};
