import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export type FilterModel<TType> = {
  condition?: FilterConditionModel;
  field: StringKeyModel<TType>;
  value: string;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;
