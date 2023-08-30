import { RATING_AGENCY_FIELDS } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource.constants';
import { type UseRatingAgencyResourceModel } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const useRatingAgencyResource = (): UseRatingAgencyResourceModel =>
  useResource<RatingAgencyModel, RatingAgencyFormModel>({
    fields: [{ result: RATING_AGENCY_FIELDS }],
    name: RATING_AGENCY_RESOURCE_NAME,
  });
