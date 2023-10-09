import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import toPlainObject from 'lodash/toPlainObject';

import { type StringKeyModel } from '#lib-shared/core/core.models';
import { CLEAN_OBJECT_KEYS } from '#lib-shared/core/utils/cleanObject/cleanObject.constants';
import { isPrimitive } from '#lib-shared/core/utils/isPrimitive/isPrimitive';

export const cleanObject = <TType extends unknown>(value: TType): TType => {
  const valueF = toPlainObject(value) as TType;
  (Object.keys(valueF as object) as Array<StringKeyModel<TType>>).forEach((k) => {
    const v = valueF[k];
    return CLEAN_OBJECT_KEYS.includes(k) || v === undefined
      ? delete valueF[k]
      : isPrimitive(v)
      ? undefined
      : (valueF[k] = (
          isArray(v)
            ? v.map((vv: object) => (isPlainObject(vv) ? cleanObject(vv) : vv))
            : cleanObject(v)
        ) as typeof v);
  });
  return valueF;
};
