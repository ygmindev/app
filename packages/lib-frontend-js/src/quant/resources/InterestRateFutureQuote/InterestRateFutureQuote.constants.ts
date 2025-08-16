import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.constants';
import { type InterestRateFutureQuoteModel } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.models';

export const INTEREST_RATE_FUTURE_QUOTE_RESOURCE_PARAMS = {
  fields: [],
  name: INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME,
} satisfies ResourceParamsModel<InterestRateFutureQuoteModel>;
