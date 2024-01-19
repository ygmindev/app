import { toPlainObject } from '@lib/shared/core/utils/toPlainObject/toPlainObject';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ toPlainObject });

describe(displayName, () => {
  test('works', async () => {
    const result = await toPlainObject({});
    expect(result).toStrictEqual({});
  });
});
