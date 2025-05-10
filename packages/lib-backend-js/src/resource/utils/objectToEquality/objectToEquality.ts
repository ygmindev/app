import {
  type ObjectToEqualityModel,
  type ObjectToEqualityParamsModel,
} from '@lib/backend/resource/utils/objectToEquality/objectToEquality.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import reduce from 'lodash/reduce';

export const objectToEquality = <TType extends unknown>(
  params: ObjectToEqualityParamsModel<TType>,
): ObjectToEqualityModel<TType> =>
  reduce(
    params as object,
    (result, v, k) =>
      v ? [...result, { field: k as StringKeyModel<TType>, value: v as string }] : result,
    [] as ObjectToEqualityModel<TType>,
  );
