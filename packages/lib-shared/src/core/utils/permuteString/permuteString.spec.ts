import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => permuteString });

describe(displayName, () => {
  test('works', async () => {
    const result = await permuteString({});
    expect(result).toStrictEqual({});
  });
});
