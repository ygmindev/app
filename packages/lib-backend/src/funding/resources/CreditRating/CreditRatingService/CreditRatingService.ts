import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
import { FundingService } from '#lib-backend/funding/resources/Funding/FundingService/FundingService';
import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  type CreditRatingFormModel,
  type CreditRatingModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type CreditRatingServiceModel } from '#lib-shared/funding/resources/CreditRating/CreditRatingService/CreditRatingService.models';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';

@withContainer()
export class CreditRatingService
  extends createEmbeddedResourceService<
    CreditRatingModel,
    CreditRatingFormModel,
    FundingModel,
    FundingFormModel
  >({
    Resource: CreditRating,
    RootService: FundingService,
    name: CREDIT_RATING_RESOURCE_NAME,
  })
  implements CreditRatingServiceModel {}
