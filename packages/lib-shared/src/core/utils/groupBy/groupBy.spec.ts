import { groupBy } from '@lib/shared/core/utils/groupBy/groupBy';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ groupBy });

describe(displayName, () => {
  test('works', async () => {
    const result = groupBy(
      [
        { a: 'a', b: 'b1' },
        { a: 'a', b: 'b2' },
        { a: 'b', b: 'b3' },
        { a: 'b', b: 'b4' },
      ],
      ({ a }) => a,
    );
    expect(result).toStrictEqual({
      a: [
        { a: 'a', b: 'b1' },
        { a: 'a', b: 'b2' },
      ],
      b: [
        { a: 'b', b: 'b3' },
        { a: 'b', b: 'b4' },
      ],
    });
  });
});
