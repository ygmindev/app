import { Pagination } from '@lib/backend/resource/utils/Pagination/Pagination';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Pagination });

describe(displayName, () => {
  test('works', async () => {
    const result = new Pagination();
    expect(result).toHaveProperty('after');
    expect(result).toHaveProperty('before');
    expect(result).toHaveProperty('first');
    expect(result).toHaveProperty('last');
  });
});
