import { remove } from '@lib/shared/core/utils/remove/remove';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ remove });

describe(displayName, () => {
  test('works', async () => {
    const result = await remove({});
    expect(result).toStrictEqual({});
  });
});
