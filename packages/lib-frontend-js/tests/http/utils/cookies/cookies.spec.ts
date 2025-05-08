import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { cookies } from '@lib/frontend/http/utils/cookies/cookies';

const { displayName } = withTest({ cookies });

describe(displayName, () => {
  test('works', async () => {
    const result = await cookies({});
    expect(result).toStrictEqual({});
  });
});
