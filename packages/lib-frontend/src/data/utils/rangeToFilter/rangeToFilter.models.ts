import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type RangeModel } from '#lib-shared/data/data.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type RangeToFilterParamsModel<TType, TKey extends StringKeyModel<TType>> = [
  field: TKey,
  value?: RangeModel<number>,
];

export type RangeToFilterModel<TType> = Array<FilterModel<TType>>;
