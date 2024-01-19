import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type CollapseFilterParamsModel<TType extends unknown> = Array<FilterModel<TType>>;

export type CollapseFilterModel<TType extends unknown> = Array<FilterModel<TType>>;
