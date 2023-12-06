import { type ResourceParamsModel } from '#lib-frontend/resource/resource.models';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import { type CreditRatingModel } from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';

export const CREDIT_RATING_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }, { fields: [{ id: '_id' }], id: RATING_AGENCY_RESOURCE_NAME }],
  name: CREDIT_RATING_RESOURCE_NAME,
  rootName: FUNDING_RESOURCE_NAME,
} satisfies ResourceParamsModel<CreditRatingModel, FundingModel>;
