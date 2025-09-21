import {
  type DATE_UNIT,
  type DATE_UNIT_MORE,
  type TIME_UNIT,
} from '@lib/shared/datetime/datetime.constants';

export type _DateTimeAddParamsModel = [
  params: Date,
  values: Partial<Record<DATE_UNIT | DATE_UNIT_MORE | TIME_UNIT, number>>,
];

export type _DateTimeAddModel = Date;
