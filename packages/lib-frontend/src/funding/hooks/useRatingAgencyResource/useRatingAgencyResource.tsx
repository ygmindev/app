import { type UseRatingAgencyResourceModel } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource.models';
import { RATING_AGENCY_RESOURCE_PARAMS } from '#lib-frontend/funding/resources/RatingAgency/RatingAgency.constants';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const useRatingAgencyResource = (): UseRatingAgencyResourceModel =>
  useResource<RatingAgencyModel, RatingAgencyFormModel>({
    ...RATING_AGENCY_RESOURCE_PARAMS,
  });
