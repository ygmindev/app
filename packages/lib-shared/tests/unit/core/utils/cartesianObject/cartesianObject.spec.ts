import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ cartesian: cartesianObject });

describe(displayName, () => {
  const a = ['a1', 'a2'];
  const b = ['b1', 'b2'];

  test('works', async () => {
    const result = cartesianObject({ a, b });
    expect(result).toStrictEqual([
      { a: 'a1', b: 'b1' },
      { a: 'a1', b: 'b2' },
      { a: 'a2', b: 'b1' },
      { a: 'a2', b: 'b2' },
    ]);
  });
});
