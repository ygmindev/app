import {
  type RangeToFilterModel,
  type RangeToFilterParamsModel,
} from '#lib-frontend/data/utils/rangeToFilter/rangeToFilter.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export const rangeToFilter = <TType>(
  ...[value, field]: RangeToFilterParamsModel<TType>
): RangeToFilterModel<TType> =>
  filterNil([
    !!value?.min && { condition: FILTER_CONDITION.GRATER_THAN_EQUAL, field, value: value.min },
    !!value?.max && { condition: FILTER_CONDITION.LESS_THAN_EQUAL, field, value: value.max },
  ]);
