import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import last from 'lodash/last';
import toPlainObject from 'lodash/toPlainObject';
import { ObjectId } from 'mongodb';

import { type StringKeyModel } from '#lib-shared/core/core.models';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';
import { isPrimitive } from '#lib-shared/core/utils/isPrimitive/isPrimitive';
import { isTypeOf } from '#lib-shared/core/utils/isTypeOf/isTypeOf';

export const cleanDocument = <TType extends unknown>(value: TType): TType => {
  const valueF = toPlainObject(value) as TType;
  (Object.keys(valueF as object) as Array<StringKeyModel<TType>>).forEach((k) => {
    const v = valueF[k];
    return v === undefined || (!isTypeOf(v, ObjectId) && isEmpty(v))
      ? delete valueF[k]
      : isPrimitive(v)
      ? undefined
      : (valueF[k] = (
          isString(v) && last(k.split('.'))?.startsWith('_')
            ? new ObjectId(v)
            : isArray(v)
            ? v.map((vv) => cleanDocument(vv as object))
            : cleanDocument(v)
        ) as typeof v);
  });
  return valueF;
};
