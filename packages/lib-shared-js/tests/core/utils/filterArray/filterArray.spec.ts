import { filterArray } from '@lib/shared/core/utils/filterArray/filterArray';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ filterArray });

describe(displayName, () => {
  test('works', async () => {
    const result = await filterArray({});
    expect(result).toStrictEqual({});
  });
});
