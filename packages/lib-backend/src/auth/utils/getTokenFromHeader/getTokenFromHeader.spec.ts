import { getTokenFromHeader } from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getTokenFromHeader });

describe(displayName, () => {
  test('works', async () => {
    const result = await getTokenFromHeader({});
    expect(result).toStrictEqual({});
  });
});
