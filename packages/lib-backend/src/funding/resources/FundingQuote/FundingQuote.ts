import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import { type FundingQuoteModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

@withEntity({ isEmbeddable: true, isRepository: true, name: FUNDING_QUOTE_RESOURCE_NAME })
export class FundingQuote extends EmbeddedResource implements FundingQuoteModel {
  @withField({
    isRepository: true,
    type: DATA_TYPE.NUMBER,
  })
  maturityDays!: number;

  @withField({
    isOptional: true,
    isRepository: true,
    type: DATA_TYPE.NUMBER,
  })
  pricing?: number;
}
