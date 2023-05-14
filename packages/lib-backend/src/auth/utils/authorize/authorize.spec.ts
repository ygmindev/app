import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';

const { displayName } = withTest({ authorize });

describe(displayName, () => {
  test('works with any role', async () => {
    let result = await authorize({ context: {}, roles: [ACCESS_ROLE.ANY] });
    expect(result).toStrictEqual(true);

    result = await authorize({
      context: { user: { _id: USER_FIXTURE._id, claims: USER_FIXTURE } },
      roles: [ACCESS_ROLE.ANY],
    });
    expect(result).toStrictEqual(true);
  });
});
