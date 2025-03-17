import {
  type CleanDocumentModel,
  type CleanDocumentParamsModel,
} from '@lib/backend/database/utils/cleanDocument/cleanDocument.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import isEqual from 'lodash/isEqual';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';
import reduce from 'lodash/reduce';
import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';

const resolveObjectId = <TType extends unknown>(value: TType): TType =>
  value instanceof ObjectId
    ? value
    : ((isString(value)
        ? new ObjectId(value)
        : isPlainObject(value)
          ? reduce(value as object, (result, v, k) => ({ ...result, [k]: resolveObjectId(v) }), {})
          : value) as TType);

const keyValueTransformer = <TValue extends unknown>(v: TValue, k?: string): TValue => {
  let vF = v;
  (vF as { entity: TValue })?.entity && (vF = (vF as { entity: TValue }).entity);
  return (
    isArray(vF)
      ? vF.map((vv) => keyValueTransformer(vv))
      : isPlainObject(vF) && isEqual(Object.keys(vF as object), ['_id'])
        ? resolveObjectId((vF as unknown as EntityResourceModel)._id)
        : isString(vF) && last(k?.split('.'))?.startsWith('_')
          ? new ObjectId(vF)
          : vF
  ) as TValue;
};

export const cleanDocument = <TType extends unknown>(
  value: CleanDocumentParamsModel<TType>,
): CleanDocumentModel<TType> => cleanObject(value, { keyValueTransformer });
