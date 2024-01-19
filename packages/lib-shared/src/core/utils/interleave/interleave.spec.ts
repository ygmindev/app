import { interleave } from '@lib/shared/core/utils/interleave/interleave';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ interleave });

describe(displayName, () => {
  test('works', async () => {
    const result = interleave(['a', 'b', 'c'], '1');
    expect(result).toStrictEqual(['a', '1', 'b', '1', 'c']);
  });
});
