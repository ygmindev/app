import { type PartialArrayModel, type PartialModel } from '@lib/shared/core/core.models';
import { type FILTER_CONDITION } from '@lib/shared/resource/utils/Filter/Filter.constants';

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
