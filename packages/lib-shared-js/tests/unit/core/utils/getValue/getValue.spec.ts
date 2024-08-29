import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getValue });

describe(displayName, () => {
  test('works', async () => {
    const result = await getValue({});
    expect(result).toStrictEqual({});
  });
});
