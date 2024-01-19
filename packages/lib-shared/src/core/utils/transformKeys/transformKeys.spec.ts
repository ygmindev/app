import { transformKeys } from '@lib/shared/core/utils/transformKeys/transformKeys';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ transformKeys });

describe(displayName, () => {
  test('works', async () => {
    const result = await transformKeys({});
    expect(result).toStrictEqual({});
  });
});
