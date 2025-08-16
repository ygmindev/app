import { type UseInterestRateQuoteResourceModel } from '@lib/frontend/quant/hooks/useInterestRateQuoteResource/useInterestRateQuoteResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type InterestRateQuoteModel,
} from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { INTEREST_RATE_QUOTE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/InterestRateQuote/InterestRateQuote.constants';

export const useInterestRateQuoteResource = (): UseInterestRateQuoteResourceModel =>
  useResource<InterestRateQuoteModel>({
    ...INTEREST_RATE_QUOTE_RESOURCE_PARAMS,
  });
