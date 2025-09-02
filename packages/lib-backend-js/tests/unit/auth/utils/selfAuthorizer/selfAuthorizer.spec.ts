import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { SIGN_IN_TOKEN_FIXTURE } from '@lib/model/auth/SignIn/SignIn.fixture';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';

const { displayName } = withTest({ selfAuthorizer });

export const CONTEXT: RequestContextModel = {
  requestId: '',
  user: SIGN_IN_TOKEN_FIXTURE,
};

describe(displayName, () => {
  test('authorized', async () => {
    const result = selfAuthorizer({
      context: CONTEXT,
      input: { filter: [], root: { _id: USER_FIXTURE._id } },
    });
    expect(result).toStrictEqual(true);
  });

  test('unauthorized', async () => {
    const result = selfAuthorizer({
      context: CONTEXT,
      input: { filter: [], root: { _id: 'unauthorized user' } },
    });
    expect(result).toStrictEqual(false);
  });
});
