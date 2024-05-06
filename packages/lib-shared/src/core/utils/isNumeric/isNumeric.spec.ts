import { isNumeric } from '@lib/shared/core/utils/isNumeric/isNumeric';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isNumeric });

describe(displayName, () => {
  test('works', async () => {
    const result = await isNumeric({});
    expect(result).toStrictEqual({});
  });
});
