import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type ObjectToEqualityParamsModel<TType> = TType;

export type ObjectToEqualityModel<TType> = Array<FilterModel<TType>>;
