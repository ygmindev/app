import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type ObjectToEqualityParamsModel<TType extends unknown> = TType;

export type ObjectToEqualityModel<TType extends unknown> = Array<FilterModel<TType>>;
