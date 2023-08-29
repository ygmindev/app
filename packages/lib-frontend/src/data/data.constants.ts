import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type NumberUnitModel, type RelativeDateUnitModel } from '#lib-frontend/data/data.models';

export const ADD = 'add';

export const FORM = 'form';

export const DATA = 'data';

export enum RATE_UNIT {
  BASIS_POINT = 'basisPoint',
  PERCENT = 'percent',
}

export enum AMOUNT_UNIT {
  BILLION = 'billion',
  MILLION = 'million',
  THOUSAND = 'thousand',
}

export enum RELATIVE_DATE_UNIT {
  DAY = 'day',
  MONTH = 'month',
  WEEK = 'week',
  YEAR = 'year',
}

export const AMOUNT_UNIT_OPTIONS: Array<TranslatableOptionModel<NumberUnitModel>> = [
  { id: AMOUNT_UNIT.THOUSAND, label: ({ t }) => t('core:thousand') },
  { id: AMOUNT_UNIT.MILLION, label: ({ t }) => t('core:million') },
  { id: AMOUNT_UNIT.BILLION, label: ({ t }) => t('core:billion') },
];

export const RELATIVE_DATE_UNIT_OPTIONS: Array<TranslatableOptionModel<RelativeDateUnitModel>> = [
  { id: RELATIVE_DATE_UNIT.DAY, label: ({ t }) => t('locale:day') },
  { id: RELATIVE_DATE_UNIT.WEEK, label: ({ t }) => t('locale:week') },
  { id: RELATIVE_DATE_UNIT.MONTH, label: ({ t }) => t('locale:month') },
  { id: RELATIVE_DATE_UNIT.YEAR, label: ({ t }) => t('locale:year') },
];
