import { type DateTimeFormatTypeModel } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.models';

export type _DateTimeFormatParamsModel = [
  value: Date | undefined,
  format?: DateTimeFormatTypeModel,
];

export type _DateTimeFormatModel = string | undefined;
