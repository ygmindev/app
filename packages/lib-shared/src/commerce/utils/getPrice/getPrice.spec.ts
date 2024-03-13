import { getPrice } from '@lib/shared/commerce/utils/getPrice/getPrice';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getPrice });

describe(displayName, () => {
  test('works', async () => {
    const result = await getPrice({});
    expect(result).toStrictEqual({});
  });
});
