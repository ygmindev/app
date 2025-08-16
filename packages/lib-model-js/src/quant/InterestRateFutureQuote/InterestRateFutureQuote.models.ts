import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type INTEREST_RATE_FUTURE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.constants';
import { type InterestRateFutureModel } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';

export type InterestRateFutureQuoteModel = QuoteModel & {
  [INTEREST_RATE_FUTURE_RESOURCE_NAME]: RefModel<InterestRateFutureModel>;
};
