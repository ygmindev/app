import isString from 'lodash/isString';
import last from 'lodash/last';
import { ObjectId } from 'mongodb';

import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const cleanDocument = <TType extends unknown>(value: TType): TType =>
  cleanObject(value, {
    additionalTransformer: <TValue>(v: TValue, k: string) =>
      (isString(v) && last(k.split('.'))?.startsWith('_') ? new ObjectId(v) : v) as TValue,
  });
