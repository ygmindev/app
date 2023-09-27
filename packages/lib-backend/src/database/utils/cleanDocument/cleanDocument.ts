import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';
import toPlainObject from 'lodash/toPlainObject';
import { ObjectId } from 'mongodb';

import { type StringKeyModel } from '#lib-shared/core/core.models';

export const cleanDocument = <TType extends unknown>(value: TType): TType => {
  const valueF = toPlainObject(value) as TType;
  (Object.keys(valueF as object) as Array<StringKeyModel<TType>>).forEach((k) => {
    let v = valueF[k];
    isPlainObject(v) && (valueF[k] = cleanDocument(v));
    isArray(v) && (v = v.map((vv) => cleanDocument(vv as object)) as typeof v);
    isString(k) &&
      last(k.split('.'))?.startsWith('_') &&
      isString(v) &&
      (valueF[k] = new ObjectId(v) as unknown as typeof v);
    v === undefined && delete valueF[k];
  });
  return valueF;
};
