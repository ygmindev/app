import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { QUOTE_RESOURCE_NAME } from '@lib/model/quant/Quote/Quote.constants';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';

export const QUOTE_RESOURCE_PARAMS = {
  fields: [],
  name: QUOTE_RESOURCE_NAME,
} satisfies ResourceParamsModel<QuoteModel, SecurityModel>;
