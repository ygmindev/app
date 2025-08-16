import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({
  isAbstract: true,
  name: QUOTE_RESOURCE_NAME,
})
export class Quote extends SourcedEntityResource implements QuoteModel {
  @withField({ type: DATA_TYPE.NUMBER })
  value?: number;
}
