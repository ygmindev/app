import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import {
  type FundingQuoteFormModel,
  type FundingQuoteModel,
} from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';

export type FundingQuoteServiceModel = EmbeddedResourceServiceModel<
  FundingQuoteModel,
  FundingQuoteFormModel,
  FundingModel
>;
