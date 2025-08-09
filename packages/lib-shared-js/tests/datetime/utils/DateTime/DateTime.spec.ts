import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ DateTime });

describe(displayName, () => {
  test('works', async () => {
    const result = await DateTime({});
    expect(result).toStrictEqual({});
  });
});
