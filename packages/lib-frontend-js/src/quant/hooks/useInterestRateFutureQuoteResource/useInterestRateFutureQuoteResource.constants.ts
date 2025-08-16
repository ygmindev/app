import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type InterestRateFutureQuoteModel } from '@lib/model/quant/InterestRateFutureQuote/InterestRateFutureQuote.models';

export const INTEREST_RATE_FUTURE_QUOTE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<InterestRateFutureQuoteModel>;
