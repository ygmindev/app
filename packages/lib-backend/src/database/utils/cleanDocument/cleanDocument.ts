import { isArray } from 'lodash';
import isEqual from 'lodash/isEqual';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';
import { ObjectId } from 'mongodb';

import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const cleanDocument = <TType extends unknown>(value: TType): TType =>
  cleanObject(value, {
    additionalTransformer: <TValue>(v: TValue, k: string) =>
      isPlainObject(v) && isEqual(Object.keys(v as object), ['_id'])
        ? (new ObjectId((v as EntityResourceModel)._id) as TValue)
        : ((isString(v) && last(k.split('.'))?.startsWith('_')
            ? isArray(v)
              ? v.map((vv) => new ObjectId(vv as string))
              : new ObjectId(v)
            : v) as TValue),
  });
