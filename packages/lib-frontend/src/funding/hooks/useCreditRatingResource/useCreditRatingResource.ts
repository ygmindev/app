import { CREDIT_RATING_FIELDS } from '#lib-frontend/funding/hooks/useCreditRatingResource/useCreditRatingResource.constants';
import { type UseCreditRatingResourceModel } from '#lib-frontend/funding/hooks/useCreditRatingResource/useCreditRatingResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  type CreditRatingFormModel,
  type CreditRatingModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const useCreditRatingResource = (): UseCreditRatingResourceModel =>
  useResource<CreditRatingModel, CreditRatingFormModel, FundingModel>({
    fields: [{ result: CREDIT_RATING_FIELDS }],
    name: CREDIT_RATING_RESOURCE_NAME,
  });
