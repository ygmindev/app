import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { synchronize } from '@lib/shared/core/utils/synchronize/synchronize';

const { displayName } = withTest({ synchronize });

describe(displayName, () => {
  test('works', async () => {
    const result = await synchronize({});
    expect(result).toStrictEqual({});
  });
});
