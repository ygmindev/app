import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import reduce from 'lodash/reduce';

export const replaceDeep = <TType extends unknown>(value: TType, from: string, to: string): TType =>
  (isString(value)
    ? value.replaceAll(from, to)
    : isPlainObject(value)
    ? reduce(
        value as unknown as object,
        (result, v, k) => ({ ...result, [k]: replaceDeep(v, from, to) }),
        {},
      )
    : isArray(value)
    ? value.map((v) => replaceDeep(v, from, to) as TType)
    : value) as TType;
