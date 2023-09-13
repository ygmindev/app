import {
  type CreditRatingFormModel,
  type CreditRatingModel,
} from '#lib-shared/funding/resources/CreditRating/CreditRating.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';

export type CreditRatingServiceModel = EmbeddedResourceServiceModel<
  CreditRatingModel,
  CreditRatingFormModel,
  FundingModel
>;
