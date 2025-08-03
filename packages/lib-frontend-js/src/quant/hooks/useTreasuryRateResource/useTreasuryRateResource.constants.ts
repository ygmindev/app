import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type TreasuryRateModel } from '@lib/model/quant/TreasuryRate/TreasuryRate.models';

export const TREASURY_RATE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<TreasuryRateModel>;
