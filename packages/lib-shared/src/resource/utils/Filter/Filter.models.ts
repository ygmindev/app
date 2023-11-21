import { type PartialModel } from '#lib-shared/core/core.models';
import { type FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';

export type FilterModel<TType extends unknown> = {
  booleanValue?: boolean;
  condition?: FilterConditionModel;
  dateValue?: Date;
  field: string;
  numberValue?: number;
  resourceValue?: PartialModel<TType>;
  stringValue?: string;
  value?: unknown;
};

export type FilterConditionModel = `${FILTER_CONDITION}`;
