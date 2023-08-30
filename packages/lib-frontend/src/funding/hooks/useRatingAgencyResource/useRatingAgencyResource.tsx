import { RATING_AGENCY_FIELDS } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource.constants';
import { type UseRatingAgencyResourceModel } from '#lib-frontend/funding/hooks/useRatingAgencyResource/useRatingAgencyResource.models';
import { useResourceMethod } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';

export const useRatingAgencyResource = (): UseRatingAgencyResourceModel => {
  const { query: create } = useResourceMethod<
    RESOURCE_METHOD_TYPE.CREATE,
    RatingAgencyModel,
    RatingAgencyFormModel
  >({
    fields: RATING_AGENCY_FIELDS,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: RATING_AGENCY_RESOURCE_NAME,
  });
  return { create };
};
