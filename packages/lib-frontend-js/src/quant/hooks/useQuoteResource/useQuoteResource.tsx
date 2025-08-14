import { type UseQuoteResourceModel } from '@lib/frontend/quant/hooks/useQuoteResource/useQuoteResource.models';
import { QUOTE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/Quote/Quote.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';

export const useQuoteResource = (): UseQuoteResourceModel =>
  useResource<QuoteModel, SecurityModel>({
    ...QUOTE_RESOURCE_PARAMS,
  });
