import { getTotalPrice } from '@lib/shared/commerce/utils/getTotalPrice/getTotalPrice';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getTotalPrice });

describe(displayName, () => {
  test('works', async () => {
    const result = await getTotalPrice({});
    expect(result).toStrictEqual({});
  });
});
