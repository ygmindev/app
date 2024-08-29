import {
  type MapValuesAsyncModel,
  type MapValuesAsyncParamsModel,
} from '@lib/shared/core/utils/mapValuesAsync/mapValuesAsync.models';
import map from 'lodash/map';

export const mapValuesAsync = async <TType extends object, TResult>(
  ...[value, callback]: MapValuesAsyncParamsModel<TType, TResult>
): Promise<MapValuesAsyncModel<TType, TResult>> =>
  Object.fromEntries(
    await Promise.all(map(value, async (v, k) => [k, await callback(v, k as keyof TType)])),
  ) as MapValuesAsyncModel<TType, TResult>;
