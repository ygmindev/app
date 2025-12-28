import { type UserModel } from '@lib/model/user/User/User.models';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const FIXTURES: Array<UserModel> = getEntityResourceFixture({
  count: 5,
  data: ({ index }) => ({
    callingCode: '1',
    email: `user${index}@email.com`,
    first: `first ${index}`,
    last: `last ${index}`,
    phone: `917${randomInt(1000000, 9999999)}`,
  }),
});

const [USER_FIXTURE, ..._] = FIXTURES;
export { USER_FIXTURE };
