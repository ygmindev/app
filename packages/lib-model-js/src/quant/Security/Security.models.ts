import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';

export type SecurityModel = SourcedEntityResourceModel & {
  description?: string;

  quotes?: Array<QuoteModel>;
};
