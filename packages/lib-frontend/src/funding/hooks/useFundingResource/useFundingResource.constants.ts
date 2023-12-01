import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';

export const FUNDING_FIELDS = [
  '_id',
  'currency',
  'created',
  'quoteCount',
  { amount: ['min', 'max'] },
  { maturityDays: ['min', 'max'] },
  {
    [CREDIT_RATING_RESOURCE_NAME]: [
      '_id',
      { [RATING_AGENCY_RESOURCE_NAME]: ['_id', 'name'] },
      'longTermRating',
      'longTermWatch',
    ],
  },
  // {
  //   [GROUP_RESOURCE_NAME]: ['_id', 'name', 'logo'],
  // },
] satisfies GraphQlQueryParamsFieldsModel<FundingModel>;
