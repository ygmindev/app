import { type DateTimeFormatTypeModel } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.models';

export type _DateTimeFormatParamsModel = {
  format: DateTimeFormatTypeModel;
  value?: Date;
};
