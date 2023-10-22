import isArray from 'lodash/isArray';
import isEqual from 'lodash/isEqual';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';
import reduce from 'lodash/reduce';
import { ObjectId } from 'mongodb';

import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

const resolveObjectId = <TType extends unknown>(value: TType): TType =>
  (isString(value)
    ? new ObjectId(value)
    : isPlainObject(value)
    ? reduce(value as object, (result, v, k) => ({ ...result, [k]: resolveObjectId(v) }), {})
    : value) as TType;

export const cleanDocument = <TType extends unknown>(value: TType): TType =>
  cleanObject(value, {
    keyValueTransformer: <TValue>(v: TValue, k: string) =>
      (isPlainObject(v) && isEqual(Object.keys(v as object), ['_id'])
        ? resolveObjectId((v as EntityResourceModel)._id)
        : isString(v) && last(k.split('.'))?.startsWith('_')
        ? isArray(v)
          ? v.map(resolveObjectId)
          : new ObjectId(v)
        : v) as TValue,
  });
