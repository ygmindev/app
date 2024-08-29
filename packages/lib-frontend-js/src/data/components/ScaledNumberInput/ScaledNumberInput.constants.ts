import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import {
  AMOUNT_UNIT,
  RELATIVE_DATE_UNIT,
} from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import {
  type AmountUnitModel,
  type NumberUnitModel,
} from '@lib/shared/data/utils/numberFormat/numberFormat.models';

export const AMOUNT_UNIT_OPTIONS = [
  { id: AMOUNT_UNIT.EXACT, label: ({ t }) => t('data:exact') },
  { id: AMOUNT_UNIT.THOUSAND, label: ({ t }) => t('data:thousand') },
  { id: AMOUNT_UNIT.MILLION, label: ({ t }) => t('data:million') },
  { id: AMOUNT_UNIT.BILLION, label: ({ t }) => t('data:billion') },
] satisfies Array<TranslatableOptionModel<AmountUnitModel>>;

export const RELATIVE_DATE_UNIT_OPTIONS = [
  { id: RELATIVE_DATE_UNIT.DAY, label: ({ t }) => t('locale:day') },
  { id: RELATIVE_DATE_UNIT.WEEK, label: ({ t }) => t('locale:week') },
  { id: RELATIVE_DATE_UNIT.MONTH, label: ({ t }) => t('locale:month') },
  { id: RELATIVE_DATE_UNIT.YEAR, label: ({ t }) => t('locale:year') },
] satisfies Array<TranslatableOptionModel<NumberUnitModel>>;
