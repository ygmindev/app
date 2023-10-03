import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

// TODO: type keys?
export type FilterModel<TType> = {
  condition?: FilterConditionModel;
  field: keyof TType;
  value: unknown;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;
