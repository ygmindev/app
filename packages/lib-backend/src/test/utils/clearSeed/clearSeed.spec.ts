import { clearSeed } from '@lib/backend/test/utils/clearSeed/clearSeed';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ clearSeed });

describe(displayName, () => {
  test('works', async () => {
    const result = await clearSeed();
    expect(result).toStrictEqual({});
  });
});
