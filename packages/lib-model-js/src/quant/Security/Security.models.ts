import { type QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type SecurityModel = EntityResourceModel & {
  [QUOTE_RESOURCE_NAME]?: Array<QuoteModel>;

  description: string;
};
