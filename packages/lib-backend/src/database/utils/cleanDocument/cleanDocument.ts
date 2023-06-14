import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';
import { ObjectId } from 'mongodb';

import { toPlainObject } from '#lib-shared/core/utils/toPlainObject/toPlainObject';

export const cleanDocument = <TType extends unknown>(value: TType): TType => {
  const valueF = toPlainObject(value);
  Object.keys(valueF).forEach((k) => {
    const v = (valueF as Record<string, unknown>)[k];
    isPlainObject(v) && ((valueF as Record<string, unknown>)[k] = cleanDocument(v));
    isString(k) &&
      last(k.split('.'))?.startsWith('_') &&
      isString(v) &&
      ((valueF as Record<string, unknown>)[k] = new ObjectId(v));
    v === undefined && delete (valueF as Record<string, unknown>)[k];
  });
  return valueF;
};
