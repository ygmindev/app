import type { DateTimeFormatTypeModel } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat.models';

export interface _DateTimeFormatParamsModel {
  format: DateTimeFormatTypeModel;
  value?: Date;
}
