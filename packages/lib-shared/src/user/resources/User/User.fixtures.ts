import { SIGN_IN_TOKEN_CLAIM_KEYS } from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import { BANK_RESOURCE_NAME } from '@lib/shared/billing/resources/Bank/Bank.constants';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { getEntityResourceFixture } from '@lib/backend/test/utils/getEntityResourceFixture/getEntityResourceFixture';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_FIXTURE: UserModel = getEntityResourceFixture({
  data: () => ({
    [BANK_RESOURCE_NAME]: [],
    [CARD_RESOURCE_NAME]: [],
    [LINKED_USER_RESOURCE_NAME]: [],
    callingCode: '1',
    email: 'user@email.com',
    first: 'fist',
    last: 'last',
    paymentMethodPrimary: '',
    phone: '9171234567',
  }),
});

export const USER_DATA_FIXTURE: EntityResourceDataModel<UserModel> = pick(
  USER_FIXTURE,
  SIGN_IN_TOKEN_CLAIM_KEYS,
);
