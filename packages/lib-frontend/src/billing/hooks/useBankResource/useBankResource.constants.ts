import type { GraphQlFieldModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';

export const BANK_FIELDS: Array<GraphQlFieldModel<BankModel>> = ['_id'];
