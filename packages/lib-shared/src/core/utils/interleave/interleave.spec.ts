import { interleave } from '@lib/shared/core/utils/interleave/interleave';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ interleave });

describe(displayName, () => {
  test('works', async () => {
    const result = interleave({ element: '1', value: ['a', 'b', 'c'] });
    expect(result).toStrictEqual(['a', '1', 'b', '1', 'c']);
  });
});
