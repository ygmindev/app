import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';

export type InterestRateQuoteModel = QuoteModel & {
  [INTEREST_RATE_RESOURCE_NAME]: RefModel<InterestRateModel>;
};
