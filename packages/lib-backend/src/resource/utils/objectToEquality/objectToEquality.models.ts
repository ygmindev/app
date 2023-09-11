import { type PartialModel } from '#lib-shared/core/core.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type ObjectToEqualityParamsModel<TType> = PartialModel<TType>;

export type ObjectToEqualityModel<TType> = Array<FilterModel<TType>>;
