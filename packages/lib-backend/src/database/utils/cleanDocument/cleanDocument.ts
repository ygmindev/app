import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import isArray from 'lodash/isArray';
import isEqual from 'lodash/isEqual';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';
import reduce from 'lodash/reduce';
import { ObjectId } from 'mongodb';

const resolveObjectId = <TType extends unknown>(value: TType): TType =>
  (isString(value)
    ? new ObjectId(value)
    : isPlainObject(value)
      ? reduce(value as object, (result, v, k) => ({ ...result, [k]: resolveObjectId(v) }), {})
      : value) as TType;

export const cleanDocument = <TType extends unknown>(value: TType): TType =>
  cleanObject(value, {
    keyValueTransformer: <TValue>(v: TValue, k: string, depth?: number) => {
      let vF = v;
      if ((vF as { entity: TValue }).entity) {
        vF = (vF as { entity: TValue }).entity;
      }
      return (
        depth === 0 && isPlainObject(vF) && isEqual(Object.keys(vF as object), ['_id'])
          ? resolveObjectId((vF as EntityResourceModel)._id)
          : isString(vF) && last(k.split('.'))?.startsWith('_')
            ? isArray(vF)
              ? vF.map(resolveObjectId)
              : new ObjectId(vF)
            : vF
      ) as TValue;
    },
  });
