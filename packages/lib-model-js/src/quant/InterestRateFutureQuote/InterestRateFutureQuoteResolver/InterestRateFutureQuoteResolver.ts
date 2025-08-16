import { InterestRateFutureQuote } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.entity';
import { InterestRateFutureQuoteImplementation } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuoteImplementation/InterestRateFutureQuoteImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.constants';
import {
  type InterestRateFutureQuoteModel,
} from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.models';
import { type InterestRateFutureQuoteResolverModel } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuoteResolver/InterestRateFutureQuoteResolver.models';

@withContainer()
@withResolver({ Resource: () => InterestRateFutureQuote })
export class InterestRateFutureQuoteResolver
  extends createEntityResourceResolver<InterestRateFutureQuoteModel>({
    Resource: () => InterestRateFutureQuote,
    ResourceImplementation: InterestRateFutureQuoteImplementation,
    name: INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME,
  })
  implements InterestRateFutureQuoteResolverModel {}
