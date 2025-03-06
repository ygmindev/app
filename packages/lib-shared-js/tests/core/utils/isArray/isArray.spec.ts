import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isArray });

describe(displayName, () => {
  test('works', async () => {
    const result = await isArray({});
    expect(result).toStrictEqual({});
  });
});
