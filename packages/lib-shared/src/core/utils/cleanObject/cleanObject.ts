import { isPlainObject, keys, toPlainObject } from 'lodash';

export const cleanObject = <TType extends unknown>(value: TType): TType => {
  const _value = isPlainObject(value) ? value : toPlainObject(value);
  keys(_value).forEach((k) => {
    const v = (_value as Record<string, unknown>)[k];
    isPlainObject(v) && cleanObject(v);
    v === undefined && delete (_value as Record<string, unknown>)[k];
  });
  return _value;
};
