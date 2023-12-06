import {
  type UseCreditRatingResourceModel,
  type UseCreditRatingResourceParamsModel,
} from '#lib-frontend/funding/hooks/useCreditRatingResource/useCreditRatingResource.models';
import { CREDIT_RATING_RESOURCE_PARAMS } from '#lib-frontend/funding/resources/CreditRating/CreditRating.constants';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import {
  type CreditRatingFormModel,
  type CreditRatingModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export const useCreditRatingResource = ({
  root,
}: UseCreditRatingResourceParamsModel = {}): UseCreditRatingResourceModel =>
  useResource<CreditRatingModel, CreditRatingFormModel, FundingModel>({
    ...CREDIT_RATING_RESOURCE_PARAMS,
    root,
  });
