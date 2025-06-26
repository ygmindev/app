import { _sort } from '@lib/shared/core/utils/sort/_sort';
import { type SortModel, type SortParamsModel } from '@lib/shared/core/utils/sort/sort.models';

export const sort = <TType extends unknown>(...params: SortParamsModel<TType>): SortModel<TType> =>
  _sort(...params);
