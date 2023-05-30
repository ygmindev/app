import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ stringify });

describe(displayName, () => {
  test('works', async () => {
    const result = await stringify({});
    expect(result).toStrictEqual({});
  });
});
