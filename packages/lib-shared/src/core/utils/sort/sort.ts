import { _sort } from '#lib-shared/core/utils/sort/_sort';
import type { SortModel, SortParamsModel } from '#lib-shared/core/utils/sort/sort.models';

export const sort = <TType>({ ...params }: SortParamsModel<TType>): SortModel<TType> =>
  _sort({ ...params });
