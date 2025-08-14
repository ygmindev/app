import { type DATE_UNIT } from '@lib/shared/datetime/datetime.constants';

export type PeriodModel = {
  unit: DATE_UNIT;

  value: number;
};
