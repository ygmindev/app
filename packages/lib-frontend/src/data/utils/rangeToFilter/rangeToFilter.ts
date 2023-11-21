import { NUMBER_RANGE_TYPE } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import {
  type RangeToFilterModel,
  type RangeToFilterParamsModel,
} from '#lib-frontend/data/utils/rangeToFilter/rangeToFilter.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export const rangeToFilter =
  <TType, TKey extends StringKeyModel<TType>>(
    params: RangeToFilterParamsModel = NUMBER_RANGE_TYPE.EXACT,
  ): RangeToFilterModel<TType, TKey> =>
  (value, field) =>
    field
      ? filterNil([
          !!value?.min && {
            condition: FILTER_CONDITION.GRATER_THAN_EQUAL,
            field: params === NUMBER_RANGE_TYPE.EXACT ? field : `${field}.min`,
            value: value.min,
          },
          !!value?.max && {
            condition: FILTER_CONDITION.LESS_THAN_EQUAL,
            field: params === NUMBER_RANGE_TYPE.EXACT ? field : `${field}.max`,
            value: value.max,
          },
        ])
      : [];
