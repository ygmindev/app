import { isPlainObject, isString, keys } from 'lodash';
import { ObjectId } from 'mongodb';

export const cleanDocument = <TType>(value: TType): TType => {
  keys(value).forEach((k) => {
    const v = (value as Record<string, unknown>)[k];
    isPlainObject(v) && ((value as Record<string, unknown>)[k] = cleanDocument(v));
    isString(k) &&
      k.startsWith('_') &&
      isString(v) &&
      ((value as Record<string, unknown>)[k] = new ObjectId(v));
    v === undefined && delete (value as Record<string, unknown>)[k];
  });
  return value;
};
