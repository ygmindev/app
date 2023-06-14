import type { _SortModel, _SortParamsModel } from '#lib-shared/core/utils/sort/_sort.models';

export interface SortParamsModel<TType> extends _SortParamsModel<TType> {}

export type SortModel<TType> = _SortModel<TType>;
