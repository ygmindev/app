import { FUNDING_QUOTE_FIELDS } from '#lib-frontend/funding/hooks/useFundingQuoteResource/useFundingQuoteResource.constants';
import { type UseFundingQuoteResourceModel } from '#lib-frontend/funding/hooks/useFundingQuoteResource/useFundingQuoteResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import {
  type FundingQuoteFormModel,
  type FundingQuoteModel,
} from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

export const useFundingQuoteResource = (): UseFundingQuoteResourceModel =>
  useResource<FundingQuoteModel, FundingQuoteFormModel, FundingModel>({
    fields: [{ result: FUNDING_QUOTE_FIELDS }],
    name: FUNDING_QUOTE_RESOURCE_NAME,
  });
