import { queryClient } from '@lib/frontend/query/utils/queryClient/queryClient';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => queryClient });

describe(displayName, () => {
  test('works', async () => {
    const result = await queryClient({});
    expect(result).toStrictEqual({});
  });
});
