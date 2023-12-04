import { type UseFundingQuoteResourceModel } from '#lib-frontend/funding/hooks/useFundingQuoteResource/useFundingQuoteResource.models';
import { FUNDING_QUOTE_RESOURCE_PARAMS } from '#lib-frontend/funding/resources/FundingQuote/FundingQuote.constants';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import {
  type FundingQuoteFormModel,
  type FundingQuoteModel,
} from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

export const useFundingQuoteResource = (): UseFundingQuoteResourceModel =>
  useResource<FundingQuoteModel, FundingQuoteFormModel, FundingModel>({
    ...FUNDING_QUOTE_RESOURCE_PARAMS,
  });
