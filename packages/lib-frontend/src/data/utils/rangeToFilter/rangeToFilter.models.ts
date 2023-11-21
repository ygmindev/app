import { type NumberRangeTypeModel } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type NumberRangeModel } from '#lib-shared/data/resources/NumberRange/NumberRange.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type RangeToFilterParamsModel = NumberRangeTypeModel;

export type RangeToFilterModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = (value?: NumberRangeModel, key?: TKey) => Array<FilterModel<TType>>;
