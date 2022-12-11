import { isArray, isPlainObject, isString, reduce } from 'lodash';

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
    ? value.map((v) => replaceDeep(v, from, to))
    : value) as TType;
