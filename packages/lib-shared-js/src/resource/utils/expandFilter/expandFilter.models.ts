import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';

export type ExpandFilterParamsModel<TType> = Array<FilterModel<TType>>;

export type ExpandFilterModel<TType> = Array<FilterModel<TType>>;
