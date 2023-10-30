import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import {
type  FundingQuoteFormModel,
  FundingQuoteModel,
} from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';

export type FundingQuoteServiceModel = EmbeddedResourceServiceModel<
    FundingQuoteModel,
    FundingQuoteFormModel,
    FundingModel,
  >;
