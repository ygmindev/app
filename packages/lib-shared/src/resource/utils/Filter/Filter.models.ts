import { type PartialModel, type PrimitiveModel } from '#lib-shared/core/core.models';
import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export type FilterModel<TType> = {
  booleanValue?: boolean;
  condition?: FilterConditionModel;
  dateValue?: Date;
  field: keyof TType;
  numberValue?: number;
  resourceValue?: PartialModel<TType>;
  stringValue?: string;
  value?: PrimitiveModel | keyof TType;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;
