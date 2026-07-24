import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';

export const INTEREST_RATE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<InterestRateModel>;
