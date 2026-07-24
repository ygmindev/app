import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type InterestRateQuoteModel } from '@lib/model/quant/InterestRateQuote/InterestRateQuote.models';

export const INTEREST_RATE_QUOTE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<InterestRateQuoteModel>;
