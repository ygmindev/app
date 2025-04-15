import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_FIXTURES: Array<UserModel> = getEntityResourceFixture({
  count: 5,
  data: ({ index }) => ({
    callingCode: '1',
    email: `user${index}@email.com`,
    first: `first ${index}`,
    last: `last ${index}`,
    paymentMethodPrimary: '',
    phone: `917${randomInt(1000000, 9999999)}`,
  }),
});

const [USER_FIXTURE, ..._] = USER_FIXTURES;
export { USER_FIXTURE };
