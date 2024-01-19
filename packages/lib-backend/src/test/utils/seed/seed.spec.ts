import { seed } from '@lib/backend/test/utils/seed/seed';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ seed });

describe(displayName, () => {
  test('works', async () => {
    const result = await seed();
    expect(result).toStrictEqual({});
  });
});
