import { aggregate } from '@lib/backend/database/utils/aggregate/aggregate';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ aggregate });

describe(displayName, () => {
  test('works', async () => {
    const result = await aggregate({});
    expect(result).toStrictEqual({});
  });
});
