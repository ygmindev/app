import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { AMOUNT_UNIT, RATE_UNIT, RELATIVE_DATE_UNIT } from '#lib-frontend/data/data.constants';
import {
  type AmountUnitModel,
  type NumberUnitModel,
  type RateUnitModel,
} from '#lib-frontend/data/data.models';

export const AMOUNT_UNIT_OPTIONS = [
  { id: AMOUNT_UNIT.THOUSAND, label: ({ t }) => t('core:thousand') },
  { id: AMOUNT_UNIT.MILLION, label: ({ t }) => t('core:million') },
  { id: AMOUNT_UNIT.BILLION, label: ({ t }) => t('core:billion') },
] satisfies Array<TranslatableOptionModel<AmountUnitModel>>;

export const RATE_UNIT_OPTIONS = [
  { id: RATE_UNIT.SPREAD, label: ({ t }) => t('funding:spread') },
  { id: RATE_UNIT.YIELD, label: ({ t }) => t('funding:yield') },
] satisfies Array<TranslatableOptionModel<RateUnitModel>>;

export const RELATIVE_DATE_UNIT_OPTIONS = [
  { id: RELATIVE_DATE_UNIT.DAY, label: ({ t }) => t('locale:day') },
  { id: RELATIVE_DATE_UNIT.WEEK, label: ({ t }) => t('locale:week') },
  { id: RELATIVE_DATE_UNIT.MONTH, label: ({ t }) => t('locale:month') },
  { id: RELATIVE_DATE_UNIT.YEAR, label: ({ t }) => t('locale:year') },
] satisfies Array<TranslatableOptionModel<NumberUnitModel>>;
