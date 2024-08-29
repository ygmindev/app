import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type ExpandFilterParamsModel<TType extends unknown> = Array<FilterModel<TType>>;

export type ExpandFilterModel<TType extends unknown> = Array<FilterModel<TType>>;
