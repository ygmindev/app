import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.constants';
import {
  type InterestRateFutureQuoteModel,
} from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.models';
import { type InterestRateFutureQuoteImplementationModel } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuoteImplementation/InterestRateFutureQuoteImplementation.models';
import { InterestRateFutureQuote } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.entity';

@withContainer()
export class InterestRateFutureQuoteImplementation
  extends createEntityResourceImplementation<InterestRateFutureQuoteModel>({
    Resource: InterestRateFutureQuote,
    name: INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME,
  })
  implements InterestRateFutureQuoteImplementationModel {}
