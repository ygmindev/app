import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { search } from '@lib/frontend/search/utils/Search/Search';

const { displayName } = withTest({ search });

describe(displayName, () => {
  test('works', async () => {
    const result = await search({});
    expect(result).toStrictEqual({});
  });
});
