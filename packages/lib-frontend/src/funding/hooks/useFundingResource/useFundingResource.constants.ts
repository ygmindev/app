import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const FUNDING_FIELDS: GraphQlQueryParamsFieldsModel<FundingModel> = [
  '_id',
  'created',
  { amount: [{ value: ['unit', 'value'] }, { max: ['unit', 'value'] }] },
  { maturity: [{ value: ['unit', 'value'] }, { max: ['unit', 'value'] }] },
  { [CREDIT_RATING_RESOURCE_NAME]: ['longTermCategory', 'longTermWatch'] },
];
