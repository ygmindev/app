import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
import { type CreditRatingResolverModel } from '#lib-backend/funding/resources/CreditRating/CreditRatingResolver/CreditRatingResolver.models';
import { CreditRatingService } from '#lib-backend/funding/resources/CreditRating/CreditRatingService/CreditRatingService';
import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
  type CreditRatingFormModel,
  type CreditRatingModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

@withContainer()
@withResolver({ Resource: () => CreditRating })
export class CreditRatingResolver
  extends createEmbeddedResourceResolver<CreditRatingModel, CreditRatingFormModel, FundingModel>({
    Resource: CreditRating,
    ResourceService: CreditRatingService,
    RootResource: Funding,
    name: CREDIT_RATING_RESOURCE_NAME,
  })
  implements CreditRatingResolverModel {}
