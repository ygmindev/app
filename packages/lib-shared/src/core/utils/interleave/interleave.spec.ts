import { interleave } from '@lib/shared/core/utils/interleave/interleave';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => interleave });

describe(displayName, () => {
  test('works', async () => {
    const result = await interleave({});
    expect(result).toStrictEqual({});
  });
});
