import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { CONTEXT_FIXTURE } from '@lib/shared/platform/platform.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';

const { displayName } = withTest({ selfAuthorizer });

describe(displayName, () => {
  test('works with authorized', async () => {
    const result = selfAuthorizer({
      context: CONTEXT_FIXTURE,
      input: { filter: [], root: { _id: USER_FIXTURE._id } },
    });
    expect(result).toStrictEqual(true);
  });

  test('works with unauthorized', async () => {
    const result = selfAuthorizer({
      context: CONTEXT_FIXTURE,
      input: { filter: [], root: { _id: 'unauthorized user' } },
    });
    expect(result).toStrictEqual(false);
  });
});
