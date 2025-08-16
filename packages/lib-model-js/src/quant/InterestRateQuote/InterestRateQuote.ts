import { RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { InterestRate } from '@lib/model/quant/InterestRate/InterestRate';
import { INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import { InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';
import { INTEREST_RATE_QUOTE_RESOURCE_NAME } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.constants';
import { type InterestRateQuoteModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { Quote } from '@lib/model/quant/Quote/Quote';

@withEntity({
  isDatabase: true,
  name: INTEREST_RATE_QUOTE_RESOURCE_NAME,
})
export class InterestRateQuote extends Quote implements InterestRateQuoteModel {
  @withManyToOneField({ Resource: () => InterestRate })
  [INTEREST_RATE_RESOURCE_NAME]!: RefModel<InterestRateModel>;
}
