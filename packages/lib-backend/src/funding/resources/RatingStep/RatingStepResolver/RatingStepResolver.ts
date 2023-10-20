import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { RatingStep } from '#lib-backend/funding/resources/RatingStep/RatingStep';
import { type RatingStepResolverModel } from '#lib-backend/funding/resources/RatingStep/RatingStepResolver/RatingStepResolver.models';
import { RatingStepService } from '#lib-backend/funding/resources/RatingStep/RatingStepService/RatingStepService';
import { RatingAgency } from '#lib-backend/funding/resources/RatingAgency/RatingAgency';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { RATING_STEP_RESOURCE_NAME } from '#lib-shared/funding/resources/RatingStep/RatingStep.constants';
import {
  type RatingStepFormModel,
  type RatingStepModel,
} from '#lib-shared/funding/resources/RatingStep/RatingStep.models';
import { type RatingAgencyModel } from '#lib-shared/funding/resources/RatingAgency/RatingAgency.models';

@withContainer()
@withResolver({ Resource: RatingStep })
export class RatingStepResolver
  extends createEmbeddedResourceResolver<RatingStepModel, RatingStepFormModel, RatingAgencyModel>({
    Resource: RatingStep,
    ResourceService: RatingStepService,
    RootResource: RatingAgency,
    name: RATING_STEP_RESOURCE_NAME,
  })
  implements RatingStepResolverModel {}
