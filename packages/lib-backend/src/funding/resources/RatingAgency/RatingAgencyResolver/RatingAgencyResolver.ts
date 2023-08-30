import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { RatingAgency } from '#lib-backend/funding/resources/RatingAgency/RatingAgency';
import { type RatingAgencyResolverModel } from '#lib-backend/funding/resources/RatingAgency/RatingAgencyResolver/RatingAgencyResolver.models';
import { RatingAgencyService } from '#lib-backend/funding/resources/RatingAgency/RatingAgencyService/RatingAgencyService';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { RATING_AGENCY_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.constants';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

@withContainer()
@withResolver({ Resource: RatingAgency })
export class RatingAgencyResolver
  extends createEntityResourceResolver<RatingAgencyModel, RatingAgencyFormModel>({
    Resource: RatingAgency,
    ResourceService: RatingAgencyService,
    name: RATING_AGENCY_RESOURCE_NAME,
  })
  implements RatingAgencyResolverModel {}
