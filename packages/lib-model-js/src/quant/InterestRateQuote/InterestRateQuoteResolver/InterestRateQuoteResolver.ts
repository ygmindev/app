import { InterestRateQuote } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.entity';
import { InterestRateQuoteImplementation } from '@lib/model/quant/InterestRateQuote/InterestRateQuoteImplementation/InterestRateQuoteImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { INTEREST_RATE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.constants';
import {
  type InterestRateQuoteModel,
} from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { type InterestRateQuoteResolverModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuoteResolver/InterestRateQuoteResolver.models';

@withContainer()
@withResolver({ Resource: () => InterestRateQuote })
export class InterestRateQuoteResolver
  extends createEntityResourceResolver<InterestRateQuoteModel>({
    Resource: () => InterestRateQuote,
    ResourceImplementation: InterestRateQuoteImplementation,
    name: INTEREST_RATE_QUOTE_RESOURCE_NAME,
  })
  implements InterestRateQuoteResolverModel {}
