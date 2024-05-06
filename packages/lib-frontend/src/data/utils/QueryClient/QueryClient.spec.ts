import { QueryClient } from '@lib/frontend/data/utils/QueryClient/QueryClient';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ QueryClient });

describe(displayName, () => {
  test('works', async () => {
    const result = new QueryClient();
    expect(result).toStrictEqual({});
  });
});
