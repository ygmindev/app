import type { GraphQlQueryParamsFieldsModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import type { ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const BANK_FIELDS: GraphQlQueryParamsFieldsModel<BankModel> = [
  '_id',
  'bank',
  'id',
  'last4',
  'type',
];

export const BANK_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  BankModel,
  UserModel
> = [{ result: BANK_FIELDS }];
