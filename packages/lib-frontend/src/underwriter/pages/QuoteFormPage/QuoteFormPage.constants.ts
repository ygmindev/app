import { RELATIVE_DATE_UNIT } from '#lib-frontend/data/data.constants';
import { type RelativeDateUnitModel } from '#lib-frontend/data/data.models';
import { type ScaledNumberModel } from '#lib-shared/data/data.models';

export const QUOTE_FORM_MATURITIES: Record<
  RelativeDateUnitModel,
  Array<ScaledNumberModel<RelativeDateUnitModel>>
> = {
  [RELATIVE_DATE_UNIT.YEAR]: [
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 2 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 3 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 5 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 7 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 10 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 20 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 30 },
  ],
  [RELATIVE_DATE_UNIT.DAY]: [
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 30 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 60 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 90 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 120 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 180 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 270 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 365 },
  ],
  [RELATIVE_DATE_UNIT.WEEK]: [],
  [RELATIVE_DATE_UNIT.MONTH]: [
    { unit: RELATIVE_DATE_UNIT.MONTH, value: 1 },
    { unit: RELATIVE_DATE_UNIT.MONTH, value: 3 },
    { unit: RELATIVE_DATE_UNIT.MONTH, value: 6 },
    { unit: RELATIVE_DATE_UNIT.MONTH, value: 9 },
    { unit: RELATIVE_DATE_UNIT.YEAR, value: 12 },
  ],
};
