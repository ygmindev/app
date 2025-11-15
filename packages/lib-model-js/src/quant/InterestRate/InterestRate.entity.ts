import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { INTEREST_RATE_RESOURCE_NAME } from '@lib/model/quant/InterestRate/InterestRate.constants';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';
import { InterestRateQuote } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.entity';
import { InterestRateQuoteModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { Security } from '@lib/model/quant/Security/Security';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({
  name: INTEREST_RATE_RESOURCE_NAME,
})
export class InterestRate extends Security implements InterestRateModel {
  @withOneToManyField({ Resource: () => InterestRateQuote, root: INTEREST_RATE_RESOURCE_NAME })
  [QUOTE_RESOURCE_NAME]?: PartialArrayModel<InterestRateQuoteModel>;
}

export default InterestRate;
