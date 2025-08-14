import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type QuoteModel } from '@lib/model/quant/Quote/Quote.models';

export const QUOTE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<QuoteModel>;
