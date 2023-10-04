import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export type FilterModel<TType> = {
  booleanValue?: boolean;
  condition?: FilterConditionModel;
  dateValue?: Date;
  field: keyof TType;
  numberValue?: number;
  stringValue?: string;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;
