import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isPlainObject from 'lodash/isPlainObject';
import toPlainObject from 'lodash/toPlainObject';
import { ObjectId } from 'mongodb';

import { type StringKeyModel } from '#lib-shared/core/core.models';
import { CLEAN_OBJECT_KEYS } from '#lib-shared/core/utils/cleanObject/cleanObject.constants';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';
import { isPrimitive } from '#lib-shared/core/utils/isPrimitive/isPrimitive';
import { isTypeOf } from '#lib-shared/core/utils/isTypeOf/isTypeOf';

export const cleanObject = <TType extends unknown>(value: TType): TType => {
  const valueF = toPlainObject(value) as TType;
  (Object.keys(valueF as object) as Array<StringKeyModel<TType>>).forEach((k) => {
    const v = valueF[k];
    CLEAN_OBJECT_KEYS.includes(k) ||
    v === undefined ||
    (isObject(v) && !isTypeOf(v, ObjectId) && isEmpty(v))
      ? delete valueF[k]
      : isPrimitive(v)
      ? undefined
      : (valueF[k] = (
          isArray(v)
            ? v.map((vv: object) => (isPlainObject(vv) ? cleanObject(vv) : vv))
            : isPrimitive(v)
            ? v
            : cleanObject(v)
        ) as typeof v);
  });
  return valueF;
};
