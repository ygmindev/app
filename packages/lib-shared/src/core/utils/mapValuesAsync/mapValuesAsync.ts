import map from 'lodash/map';

import type {
  MapValuesAsyncModel,
  MapValuesAsyncParamsModel,
} from '#lib-shared/core/utils/mapValuesAsync/mapValuesAsync.models';

export const mapValuesAsync = async <TType extends object, TResult>({
  callback,
  value,
}: MapValuesAsyncParamsModel<TType, TResult>): MapValuesAsyncModel<TType, TResult> =>
  Object.fromEntries(
    await Promise.all(map(value, async (v, k) => [k, await callback(v, k as keyof TType)])),
  );
