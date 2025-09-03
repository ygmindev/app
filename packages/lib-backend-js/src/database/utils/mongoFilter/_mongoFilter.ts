import {
  type _MongoFilterModel,
  type _MongoFilterParamsModel,
} from '@lib/backend/database/utils/mongoFilter/_mongoFilter.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';
import isString from 'lodash/isString';
import last from 'lodash/last';
import { ObjectId } from 'mongodb';

export const _mongoFilter = <TType extends unknown>(
  ...[params, prefix]: _MongoFilterParamsModel<TType>
): _MongoFilterModel<TType> =>
  params?.id
    ? [
        {
          condition: '$in',
          field: prefix ? `${prefix}._id` : '_id',
          value: params.id.map((v) => new ObjectId(v)),
        },
      ]
    : (params?.filter?.map((v) => {
        let condition = v.condition ?? FILTER_CONDITION.EQUAL;
        let { value } = v;
        switch (condition) {
          case FILTER_CONDITION.LIKE: {
            if (isString(value)) {
              condition = '$regex' as FILTER_CONDITION;
              value = new RegExp(value, 'i');
            }
            break;
          }
        }
        return {
          condition,
          field: prefix ? `${prefix}.${v.field}` : v.field,
          value: last(v.field.split('.'))?.startsWith('_')
            ? isArray(value)
              ? value.map((vv) => (isString(vv) ? new ObjectId(vv) : vv))
              : isString(value)
                ? new ObjectId(value)
                : value
            : value,
        };
      }) ?? []);
