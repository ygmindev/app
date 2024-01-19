import { pick } from '@lib/shared/core/utils/pick/pick';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ pick });

describe(displayName, () => {
  test('works', async () => {
    const result = await pick({});
    expect(result).toStrictEqual({});
  });
});
