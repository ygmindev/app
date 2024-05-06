import { collapseFilter } from '@lib/shared/resource/utils/collapseFilter/collapseFilter';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ collapseFilter });

describe(displayName, () => {
  test('works', async () => {
    const result = await collapseFilter({});
    expect(result).toStrictEqual({});
  });
});
