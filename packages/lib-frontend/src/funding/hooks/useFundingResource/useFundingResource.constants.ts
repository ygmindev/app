import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';

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
      { agency: ['_id', 'name'] },
      'longTermRating',
      'longTermWatch',
    ],
  },
  {
    [GROUP_RESOURCE_NAME]: ['_id', 'name', 'logo'],
  },
] satisfies GraphQlQueryParamsFieldsModel<FundingModel>;
