import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { INTEREST_RATE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.constants';
import { type InterestRateQuoteModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';

export const INTEREST_RATE_QUOTE_RESOURCE_PARAMS = {
  fields: [],
  name: INTEREST_RATE_QUOTE_RESOURCE_NAME,
} satisfies ResourceParamsModel<InterestRateQuoteModel>;
