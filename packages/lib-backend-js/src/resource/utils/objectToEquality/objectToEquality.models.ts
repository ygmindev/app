import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';

export type ObjectToEqualityParamsModel<TType extends unknown> = TType;

export type ObjectToEqualityModel<TType extends unknown> = Array<FilterModel<TType>>;
