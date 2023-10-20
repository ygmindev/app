import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { RatingAgencyService } from '#lib-backend/funding/resources/RatingAgency/RatingAgencyService/RatingAgencyService';
import { RatingStep } from '#lib-backend/funding/resources/RatingStep/RatingStep';
import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import {
  type RatingAgencyFormModel,
  type RatingAgencyModel,
} from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';
import { RATING_STEP_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingStep/RatingStep.constants';
import {
  type RatingStepFormModel,
  type RatingStepModel,
} from '#lib-shared/funding/resources/RatingStep/RatingStep.models';
import { type RatingStepServiceModel } from '#lib-shared/funding/resources/RatingStep/RatingStepService/RatingStepService.models';

@withContainer()
export class RatingStepService
  extends createEmbeddedResourceService<
    RatingStepModel,
    RatingStepFormModel,
    RatingAgencyModel,
    RatingAgencyFormModel
  >({
    Resource: RatingStep,
    RootService: RatingAgencyService,
    name: RATING_STEP_RESOURCE_NAME,
  })
  implements RatingStepServiceModel {}
