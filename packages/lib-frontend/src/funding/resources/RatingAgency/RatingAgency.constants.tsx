import { type ResourceParamsModel } from '#lib-frontend/resource/resource.models';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

export const RATING_AGENCY_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }, { id: 'name' }, { id: 'logo' }],
  name: RATING_AGENCY_RESOURCE_NAME,
} satisfies ResourceParamsModel<RatingAgencyModel>;
