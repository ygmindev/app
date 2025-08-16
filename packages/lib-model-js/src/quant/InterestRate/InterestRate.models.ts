import { type InterestRateQuoteModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { type QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';

export type InterestRateModel = SecurityModel & {
  [QUOTE_RESOURCE_NAME]?: Array<InterestRateQuoteModel>;
};
