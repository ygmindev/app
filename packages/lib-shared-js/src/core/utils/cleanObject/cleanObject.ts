import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { cleanObject as cleanObjectBase } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
import {
  type CleanObjectModel,
  type CleanObjectParamsModel,
} from '@lib/shared/core/utils/cleanObject/cleanObject.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import isEqual from 'lodash/isEqual';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import last from 'lodash/last';

// const resolveObjectId = <TType extends unknown>(value: TType): TType =>
//   value instanceof ObjectId
//     ? value
//     : ((isString(value)
//         ? new ObjectId(value)
//         : isPlainObject(value)
//           ? reduce(value as object, (result, v, k) => ({ ...result, [k]: resolveObjectId(v) }), {})
//           : value) as TType);

// const resolveObjectId = <TType extends unknown>(value: TType): TType =>
//   (isString(value) ? new ObjectId(value) : value) as TType;
const resolveObjectId = <TType extends unknown>(value: TType): TType =>
  isString(value) ? value : value;

const keyValueTransformer = <TValue extends unknown>(v: TValue, k?: string): TValue => {
  let vF = v;
  (vF as { entity: TValue })?.entity && (vF = (vF as { entity: TValue }).entity);
  return (
    isArray(vF)
      ? vF.map((vv) => keyValueTransformer(vv))
      : isPlainObject(vF) && isEqual(Object.keys(vF as object), ['_id'])
        ? resolveObjectId((vF as unknown as EntityResourceModel)._id)
        : isString(vF) && last(k?.split('.'))?.startsWith('_')
          ? resolveObjectId(vF)
          : vF
  ) as TValue;
};

export const cleanObject = <TType extends unknown>(
  ...[value, options, depth]: CleanObjectParamsModel<TType>
): CleanObjectModel<TType> =>
  cleanObjectBase(
    value,
    {
      ...options,
      keyValueTransformer,
      primitiveTypes: [...(options?.primitiveTypes ?? []), ObjectId],
    },
    depth,
  );
