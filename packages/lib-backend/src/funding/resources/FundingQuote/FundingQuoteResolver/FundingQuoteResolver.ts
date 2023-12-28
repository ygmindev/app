import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Funding } from '#lib-backend/funding/resources/Funding/Funding';
import { FundingQuote } from '#lib-backend/funding/resources/FundingQuote/FundingQuote';
import { type FundingQuoteResolverModel } from '#lib-backend/funding/resources/FundingQuote/FundingQuoteResolver/FundingQuoteResolver.models';
import { FundingQuoteService } from '#lib-backend/funding/resources/FundingQuote/FundingQuoteService/FundingQuoteService';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import {
  type FundingQuoteFormModel,
  type FundingQuoteModel,
} from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

@withContainer()
@withResolver({ Resource: () => FundingQuote })
export class FundingQuoteResolver
  extends createEmbeddedResourceResolver<FundingQuoteModel, FundingQuoteFormModel, FundingModel>({
    Resource: () => FundingQuote,
    ResourceService: FundingQuoteService,
    RootResource: () => Funding,
    name: FUNDING_QUOTE_RESOURCE_NAME,
  })
  implements FundingQuoteResolverModel {}
