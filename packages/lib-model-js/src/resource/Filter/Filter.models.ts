import { type FILTER_CONDITION } from '@lib/model/resource/Filter/Filter.constants';
import { type PartialArrayModel, type PartialModel } from '@lib/shared/core/core.models';

export type FilterModel<TType extends unknown> = {
  booleanValue?: boolean;
  condition?: FILTER_CONDITION;
  dateValue?: Date;
  field: string;
  numberValue?: number;
  resourceArrayValue?: PartialArrayModel<TType>;
  resourceValue?: PartialModel<TType>;
  stringArrayValue?: Array<string>;
  stringValue?: string;
  value?: unknown;
};
