import { PageInfo } from '@lib/backend/resource/utils/PageInfo/PageInfo';
import { Pagination } from '@lib/backend/resource/utils/Pagination/Pagination';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => Pagination });

describe(displayName, () => {
  test('works', async () => {
    const result = new PageInfo();
    expect(result).toHaveProperty('hasNextPage');
    expect(result).toHaveProperty('hasPreviousPage');
    expect(result).toHaveProperty('startCursor');
    expect(result).toHaveProperty('endCursor');
  });
});
