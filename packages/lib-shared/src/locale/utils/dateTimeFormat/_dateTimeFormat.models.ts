import type { DateTimeFormatTypeModel } from '@lib/shared/locale/utils/dateTimeFormat/dateTimeFormat.models';

export interface _DateTimeFormatParamsModel {
  format: DateTimeFormatTypeModel;
  value?: Date;
}
