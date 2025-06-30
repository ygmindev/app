import { Collection } from '@lib/backend/core/utils/Collection/Collection';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Collection });

describe(displayName, () => {
  test('works', async () => {
    const result = new Collection();
    expect(result).toStrictEqual({});
  });
});
