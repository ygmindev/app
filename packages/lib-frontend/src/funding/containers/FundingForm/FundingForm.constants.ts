import { type FundingFormModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FUNDING_FORM_INITIAL_VALUES: FundingFormModel = {
  amount: {
    min: 10e6,
  },
  currency: 'USD',
  maturityDays: {
    min: 5 * 365,
  },
};
