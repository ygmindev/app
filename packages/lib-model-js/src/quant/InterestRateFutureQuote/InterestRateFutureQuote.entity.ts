import { RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import InterestRateFuture from '@lib/model/quant/InterestRateFuture/InterestRateFuture';
import { INTEREST_RATE_FUTURE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.constants';
import { type InterestRateFutureModel } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';
import { INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.constants';
import { type InterestRateFutureQuoteModel } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.models';
import { Quote } from '@lib/model/quant/Quote/Quote';

@withEntity({
  isDatabase: true,
  name: INTEREST_RATE_FUTURE_QUOTE_RESOURCE_NAME,
})
export class InterestRateFutureQuote extends Quote implements InterestRateFutureQuoteModel {
  @withManyToOneField({ Resource: () => InterestRateFuture })
  [INTEREST_RATE_FUTURE_RESOURCE_NAME]!: RefModel<InterestRateFutureModel>;
}

export default InterestRateFutureQuoteModel;
