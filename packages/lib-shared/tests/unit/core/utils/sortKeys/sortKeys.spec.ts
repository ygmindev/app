import { sortKeys } from '@lib/shared/core/utils/sortKeys/sortKeys';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ sortKeys });

describe(displayName, () => {
  test('works', async () => {
    const result = sortKeys({ a: 'a', b: 'b', c: 'c' });
    expect(result).toStrictEqual({ a: 'a', b: 'b', c: 'c' });
  });
});
