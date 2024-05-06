import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isEqual });

describe(displayName, () => {
  test('works', async () => {
    const result = isEqual(1, 1);
    expect(result).toStrictEqual(true);
  });
});
