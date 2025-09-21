import {
  type DATE_UNIT,
  type DATE_UNIT_MORE,
  type TIME_UNIT,
} from '@lib/shared/datetime/datetime.constants';
import { type DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

export type _DateTimeAddParamsModel = [
  params: DateTime,
  values: Partial<Record<DATE_UNIT | DATE_UNIT_MORE | TIME_UNIT, number>>,
];

export type _DateTimeAddModel = DateTime;
