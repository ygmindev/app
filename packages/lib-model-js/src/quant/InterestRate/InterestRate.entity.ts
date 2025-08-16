import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';
import { InterestRateQuote } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.entity';
import { InterestRateQuoteModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { Security } from '@lib/model/quant/Security/Security';

@withEntity({
  isDatabase: true,
  name: INTEREST_RATE_RESOURCE_NAME,
})
export class InterestRate extends Security implements InterestRateModel {
  @withOneToManyField({ Resource: () => InterestRateQuote, root: INTEREST_RATE_RESOURCE_NAME })
  [QUOTE_RESOURCE_NAME]?: Array<InterestRateQuoteModel>;
}

export default InterestRate;
