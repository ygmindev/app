import { isPrimitive } from '@lib/shared/core/utils/isPrimitive/isPrimitive';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => isPrimitive });

describe(displayName, () => {
  test('works', async () => {
    const result = await isPrimitive({});
    expect(result).toStrictEqual({});
  });
});
