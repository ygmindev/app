import { type ResourceParamsModel } from '#lib-frontend/resource/resource.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { FUNDING_QUOTE_RESOURCE_NAME } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.constants';
import { type FundingQuoteModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';

export const FUNDING_QUOTE_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }, { id: 'created' }, { id: 'maturityDays' }, { id: 'pricing' }],
  name: FUNDING_QUOTE_RESOURCE_NAME,
} satisfies ResourceParamsModel<FundingQuoteModel, FundingModel>;
