import {
  type PartialModel,
  type PrimitiveModel,
  type RequiredModel,
} from '#lib-shared/core/core.models';
import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export type FilterModel<TType> = {
  booleanValue?: boolean;
  condition?: FilterConditionModel;
  dateValue?: Date;
  field: keyof PartialModel<RequiredModel<TType>>;
  numberValue?: number;
  resourceValue?: PartialModel<RequiredModel<TType>>;
  stringValue?: string;
  value?: PrimitiveModel | PartialModel<RequiredModel<TType>>;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;
