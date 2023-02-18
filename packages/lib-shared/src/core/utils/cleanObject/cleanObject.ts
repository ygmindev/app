import { CLEAN_OBJECT_KEYS } from '@lib/shared/core/utils/cleanObject/cleanObject.constants';
import { isPrimitive } from '@lib/shared/core/utils/isPrimitive/isPrimitive';
import isPlainObject from 'lodash/isPlainObject';
import toPlainObject from 'lodash/toPlainObject';

export const cleanObject = <TType extends unknown>(value: TType): TType => {
  const _value = isPlainObject(value) ? value : toPlainObject(value);
  Object.keys(_value).forEach((k) => {
    const v = (_value as Record<string, unknown>)[k];
    CLEAN_OBJECT_KEYS.includes(k)
      ? delete (_value as Record<string, unknown>)[k]
      : isPrimitive(v)
      ? v === undefined && delete (_value as Record<string, unknown>)[k]
      : ((_value as Record<string, unknown>)[k] = cleanObject(v));
  });
  return _value;
};
