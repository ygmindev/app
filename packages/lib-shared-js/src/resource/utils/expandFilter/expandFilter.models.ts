import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type ExpandFilterParamsModel<TType> = Array<FilterModel<TType>>;

export type ExpandFilterModel<TType> = Array<FilterModel<TType>>;
