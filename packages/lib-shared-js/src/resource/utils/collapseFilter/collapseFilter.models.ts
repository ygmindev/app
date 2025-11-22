import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';

export type CollapseFilterParamsModel<TType extends unknown> = Array<FilterModel<TType>>;

export type CollapseFilterModel<TType extends unknown> = Array<FilterModel<TType>>;
