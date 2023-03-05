import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import { ObjectId } from 'mongodb';

export const cleanDocument = <TType extends unknown>(value: TType): TType => {
  const _value = toPlainObject(value);
  Object.keys(_value).forEach((k) => {
    const v = (_value as Record<string, unknown>)[k];
    isPlainObject(v) && ((_value as Record<string, unknown>)[k] = cleanDocument(v));
    isString(k) &&
      k.startsWith('_') &&
      isString(v) &&
      ((_value as Record<string, unknown>)[k] = new ObjectId(v));
    v === undefined && delete (_value as Record<string, unknown>)[k];
  });
  return _value;
};
