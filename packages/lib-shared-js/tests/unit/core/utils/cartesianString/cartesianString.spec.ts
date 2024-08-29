import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ cartesianString });

describe(displayName, () => {
  test('works', async () => {
    const result = cartesianString(['a', 'b'], ['1', '2']);
    expect(result).toStrictEqual(['a1', 'a2', 'b1', 'b2']);
  });
});
