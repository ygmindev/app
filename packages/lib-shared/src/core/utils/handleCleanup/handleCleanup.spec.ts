import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ handleCleanup });

describe(displayName, () => {
  test('works', async () => {
    const result = await handleCleanup({});
    expect(result).toStrictEqual({});
  });
});
