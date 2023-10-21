import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FUNDING_FIELDS = [
  '_id',
  'created',
  'currency',
  { amount: ['min', 'max', 'unit'] },
  { maturity: ['min', 'max', 'unit'] },
  { [CREDIT_RATING_RESOURCE_NAME]: ['longTermRating', 'longTermWatch'] },
] satisfies GraphQlQueryParamsFieldsModel<FundingModel>;
