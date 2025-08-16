import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type InterestRateQuoteModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';

export const INTEREST_RATE_QUOTE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<InterestRateQuoteModel>;
