import { AMOUNT_UNIT, RELATIVE_DATE_UNIT } from '#lib-frontend/data/data.constants';
import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FUNDING_FORM_INITIAL_VALUES: FundingFormModel = {
  amount: {
    min: 10,
    unit: AMOUNT_UNIT.MILLION,
  },
  currency: 'USD',
  maturity: {
    min: 5,
    unit: RELATIVE_DATE_UNIT.YEAR,
  },
};