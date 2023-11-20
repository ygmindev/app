import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type NumberRangeModel } from '#lib-shared/data/resources/NumberRange/NumberRange.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type RangeToFilterParamsModel<TType, TKey extends StringKeyModel<TType>> = [
  field: TKey,
  value?: NumberRangeModel,
];

export type RangeToFilterModel<TType> = Array<FilterModel<TType>>;
