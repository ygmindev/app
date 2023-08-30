import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { EmbeddedResourceResolver } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import { CreditRating } from '#lib-backend/funding/resources/CreditRating/CreditRating';
import { CreditRatingService } from '#lib-backend/funding/resources/CreditRating/CreditRatingService/CreditRatingService';
import { type CreditRatingServiceModel } from '#lib-backend/funding/resources/CreditRating/CreditRatingService/CreditRatingService.models';
import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { CREDIT_RATING_RESOURCE_NAME } from '#lib-shared/funding/resources/CreditRating/CreditRating.constants';
import {
type  CreditRatingFormModel,
  CreditRatingModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

const EmbeddedResourceResolverF = EmbeddedResourceResolver<
  CreditRatingModel,
  CreditRatingFormModel,
  FundingModel
>({
  Resource: CreditRating,
  ResourceService: CreditRatingService,
  RootResource: Funding,
  name: CREDIT_RATING_RESOURCE_NAME,
});

@withContainer()
@withResolver({ Resource: CreditRating })
export class CreditRatingResolver
  extends EmbeddedResourceResolverF
  implements CreditRatingServiceModel {}
