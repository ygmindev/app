import { selfAuthorizer } from '@lib/backend/auth/utils/selfAuthorizer/selfAuthorizer';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => selfAuthorizer });

describe(displayName, () => {
  test('works', async () => {
    const result = await selfAuthorizer({});
    expect(result).toStrictEqual({});
  });
});
