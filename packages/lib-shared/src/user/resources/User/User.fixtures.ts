import { SIGN_IN_TOKEN_CLAIM_KEYS } from '#lib-shared/auth/resources/SignIn/SignIn.constants';
import { BANK_RESOURCE_NAME } from '#lib-shared/billing/resources/Bank/Bank.constants';
import { CARD_RESOURCE_NAME } from '#lib-shared/billing/resources/Card/Card.constants';
import { PAYMENT_METHOD_RESOURCE_NAME } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.constants';
import { type RequiredModel } from '#lib-shared/core/core.models';
import { pick } from '#lib-shared/core/utils/pick/pick';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { LINKED_USER_RESOURCE_NAME } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const USER_FIXTURE: RequiredModel<UserModel> = {
  [BANK_RESOURCE_NAME]: [],
  [CARD_RESOURCE_NAME]: [],
  [LINKED_USER_RESOURCE_NAME]: [],
  [PAYMENT_METHOD_RESOURCE_NAME]: [],
  _id: '6448881dd34cb0fcb6734acf',
  beforeCreate: async (): Promise<void> => {
    return;
  },
  callingCode: '1',
  created: new Date(2000, 1, 1),
  email: 'user@email.com',
  first: 'fist',
  last: 'last',
  paymentMethodPrimary: '',
  phone: '9171234567',
};

export const USER_DATA_FIXTURE: EntityResourceDataModel<UserModel> = pick(
  USER_FIXTURE,
  SIGN_IN_TOKEN_CLAIM_KEYS,
);
