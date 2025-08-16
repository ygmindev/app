import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { INTEREST_RATE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.constants';
import {
  type InterestRateQuoteModel,
} from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { type InterestRateQuoteImplementationModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuoteImplementation/InterestRateQuoteImplementation.models';
import { InterestRateQuote } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.entity';

@withContainer()
export class InterestRateQuoteImplementation
  extends createEntityResourceImplementation<InterestRateQuoteModel>({
    Resource: InterestRateQuote,
    name: INTEREST_RATE_QUOTE_RESOURCE_NAME,
  })
  implements InterestRateQuoteImplementationModel {}
