import { type ResourceParamsModel } from '#lib-frontend/resource/resource.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FUNDING_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'currency' },
    { id: 'created' },
    { id: 'quoteCount' },
    { fields: [{ id: 'min' }, { id: 'max' }], id: 'amount' },
    { fields: [{ id: 'min' }, { id: 'max' }], id: 'maturityDays' },
    {
      fields: [
        { id: '_id' },
        // { [RATING_AGENCY_RESOURCE_NAME]: { fields: [{ id: '_id' }, { id: 'name' }] } },
        { id: 'longTermRating' },
        { id: 'longTermWatch' },
        { id: 'longTermRating' },
      ],
      id: CREDIT_RATING_RESOURCE_NAME,
    },
  ],
  name: FUNDING_RESOURCE_NAME,
} satisfies ResourceParamsModel<FundingModel>;
