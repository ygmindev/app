import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { type BankModel } from '@lib/shared/billing/resources/Bank/Bank.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const BANK_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }, { id: 'externalId' }, { id: 'last4' }, { id: 'name' }],
  name: BANK_RESOURCE_NAME,
  rootName: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<BankModel, UserModel>;
