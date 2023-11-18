import { rangeToFilter } from '#lib-frontend/data/utils/rangeToFilter/rangeToFilter';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ rangeToFilter });

describe(displayName, () => {
  test('works', async () => {
    const result = await rangeToFilter({});
    expect(result).toStrictEqual({});
  });
});
