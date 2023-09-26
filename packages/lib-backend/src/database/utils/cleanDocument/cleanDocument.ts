import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';
import { ObjectId } from 'mongodb';

import { type StringKeyModel } from '#lib-shared/core/core.models';
import { toPlainObject } from '#lib-shared/core/utils/toPlainObject/toPlainObject';

export const cleanDocument = <TType extends unknown>(value: TType): TType => {
  const valueF = toPlainObject(value);
  (Object.keys(valueF) as Array<StringKeyModel<TType>>).forEach((k) => {
    let v = valueF[k];
    isPlainObject(v) && (valueF[k] = cleanDocument(v));
    isArray(v) && (v = v.map(cleanDocument) as typeof v);
    isString(k) &&
      last(k.split('.'))?.startsWith('_') &&
      isString(v) &&
      ((valueF as Record<string, unknown>)[k] = new ObjectId(v));
    v === undefined && delete (valueF as Record<string, unknown>)[k];
  });
  return valueF;
};
