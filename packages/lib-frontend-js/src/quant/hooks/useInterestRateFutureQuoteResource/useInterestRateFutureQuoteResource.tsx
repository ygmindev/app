import { type UseInterestRateFutureQuoteResourceModel } from '@lib/frontend/quant/hooks/useInterestRateFutureQuoteResource/useInterestRateFutureQuoteResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type InterestRateFutureQuoteModel,
} from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.models';
import { INTEREST_RATE_FUTURE_QUOTE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRateFutureQuote/InterestRateFutureQuote.constants';

export const useInterestRateFutureQuoteResource = (): UseInterestRateFutureQuoteResourceModel =>
  useResource<InterestRateFutureQuoteModel>({
    ...INTEREST_RATE_FUTURE_QUOTE_RESOURCE_PARAMS,
  });
