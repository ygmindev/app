import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { BANK_RESOURCE_NAME } from '@lib/model/billing/Bank/Bank.constants';
import { type BankModel } from '@lib/model/billing/Bank/Bank.models';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

export const BANK_RESOURCE_PARAMS = {
  fields: [{ id: 'externalId' }, { id: 'last4' }, { id: 'name' }],
  name: BANK_RESOURCE_NAME,
  rootName: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<BankModel, UserModel>;
