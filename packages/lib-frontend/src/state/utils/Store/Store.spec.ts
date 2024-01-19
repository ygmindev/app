import { Store as Store } from '@lib/frontend/state/utils/Store/Store';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Store });

describe(displayName, () => {
  test('works', async () => {
    const result = await Store({});
    expect(result).toStrictEqual({});
  });
});
