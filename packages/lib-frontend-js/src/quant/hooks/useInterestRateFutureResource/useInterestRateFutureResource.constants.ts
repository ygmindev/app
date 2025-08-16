import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type InterestRateFutureModel } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';

export const INTEREST_RATE_FUTURE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<InterestRateFutureModel>;
