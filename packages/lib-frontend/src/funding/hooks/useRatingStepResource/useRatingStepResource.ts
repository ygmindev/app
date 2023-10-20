import { RATING_STEP_FIELDS } from '#lib-frontend/funding/hooks/useRatingStepResource/useRatingStepResource.constants';
import { type UseRatingStepResourceModel } from '#lib-frontend/funding/hooks/useRatingStepResource/useRatingStepResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { RATING_STEP_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingStep/RatingStep.constants';
import {
  type RatingStepFormModel,
  type RatingStepModel,
} from '#lib-shared/funding/resources/RatingStep/RatingStep.models';
import { type RatingAgencyModel } from '#lib-shared/Funding/resources/Funding/Funding.models';

export const useRatingStepResource = (): UseRatingStepResourceModel =>
  useResource<RatingStepModel, RatingStepFormModel, FundingModel>({
    fields: [{ result: RATING_STEP_FIELDS }],
    name: RATING_STEP_RESOURCE_NAME,
  });
