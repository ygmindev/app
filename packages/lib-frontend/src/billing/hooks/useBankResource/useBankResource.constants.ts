import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type BankModel } from '#lib-shared/billing/resources/Bank/Bank.models';

export const BANK_FIELDS: GraphQlQueryParamsFieldsModel<BankModel> = [
  '_id',
  'bank',
  'id',
  'last4',
  'type',
];
