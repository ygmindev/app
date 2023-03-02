import type { DateTimeFormatTypeModel } from '@lib/shared/format/utils/dateTimeFormat/dateTimeFormat.models';

export interface _DateTimeFormatParamsModel {
  format: DateTimeFormatTypeModel;
  value?: Date;
}
