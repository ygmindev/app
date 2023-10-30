import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { FundingService } from '#lib-backend/funding/resources/Funding/FundingService/FundingService';
import { FundingQuote } from '#lib-backend/funding/resources/FundingQuote/FundingQuote';
import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import {
  type FundingQuoteFormModel,
  type FundingQuoteModel,
} from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';
import { type FundingQuoteServiceModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuoteService/FundingQuoteService.models';

@withContainer()
export class FundingQuoteService
  extends createEmbeddedResourceService<
    FundingQuoteModel,
    FundingQuoteFormModel,
    FundingModel,
    FundingFormModel
  >({
    Resource: FundingQuote,
    RootService: FundingService,
    name: FUNDING_QUOTE_RESOURCE_NAME,
  })
  implements FundingQuoteServiceModel {}
