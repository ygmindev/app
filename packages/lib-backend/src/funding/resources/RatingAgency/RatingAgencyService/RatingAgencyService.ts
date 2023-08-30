import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { type RatingAgencyServiceModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgencyService/RatingAgencyService.models';

@withContainer({ name: `${RATING_AGENCY_RESOURCE_NAME}Service` })
export class RatingAgencyService
  extends createEntityResourceService<RatingAgencyModel, RatingAgencyFormModel>({
    name: RATING_AGENCY_RESOURCE_NAME,
  })
  implements RatingAgencyServiceModel {}
