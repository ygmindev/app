import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { sort } from '@lib/shared/core/utils/sort/sort';

const { displayName } = withTest({ target: () => sort });

describe(displayName, () => {
  test('works', async () => {
    const result = await sort({});
    expect(result).toStrictEqual({});
  });
});
