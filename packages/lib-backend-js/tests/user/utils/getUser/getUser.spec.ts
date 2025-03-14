import { getUser } from '@lib/backend/user/utils/getUser/getUser';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getUser });

describe(displayName, () => {
  test('works', async () => {
    const result = await getUser({});
    expect(result).toStrictEqual({});
  });
});
