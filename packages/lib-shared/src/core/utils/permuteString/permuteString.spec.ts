import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ permuteString });

describe(displayName, () => {
  test('works', async () => {
    const result = permuteString(['a', 'b'], ['1', '2']);
    expect(result).toStrictEqual(['a1', 'a2', 'b1', 'b2']);
  });
});
