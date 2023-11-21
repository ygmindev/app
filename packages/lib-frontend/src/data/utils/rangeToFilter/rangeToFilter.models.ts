import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type NumberRangeModel } from '#lib-shared/data/resources/NumberRange/NumberRange.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type RangeToFilterParamsModel<TType> = [
  value: NumberRangeModel | undefined,
  field: StringKeyModel<TType>,
];

export type RangeToFilterModel<TType> = Array<FilterModel<TType>>;
