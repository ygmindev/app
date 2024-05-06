import { getUserFromHeader } from '@lib/backend/auth/utils/getUserFromHeader/getUserFromHeader';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getUserFromHeader });

describe(displayName, () => {
  test('works', async () => {
    const result = await getUserFromHeader({});
    expect(result).toStrictEqual({});
  });
});
