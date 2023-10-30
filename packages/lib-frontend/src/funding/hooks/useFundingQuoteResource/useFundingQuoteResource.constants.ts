import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type FundingModel } from '#lib-shared/funding/resources/Funding/Funding.models';
import { type FundingQuoteModel } from '#lib-shared/funding/resources/FundingQuote/FundingQuote.models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const FUNDING_QUOTE_FIELDS = [
  '_id',
  'created',
  { maturity: ['unit', 'value'] },
  { pricing: ['unit', 'value'] },
] satisfies GraphQlQueryParamsFieldsModel<FundingQuoteModel>;

export const FUNDING_QUOTE_OUTPUT_FIELDS = [
  { result: FUNDING_QUOTE_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  FundingQuoteModel,
  FundingModel
>;
