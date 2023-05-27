import { isPrimitive } from '@lib/shared/core/utils/isPrimitive/isPrimitive';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isPrimitive });

describe(displayName, () => {
  test('works', async () => {
    expect(isPrimitive(1)).toStrictEqual(true);
    expect(isPrimitive('a')).toStrictEqual(true);
    expect(isPrimitive(true)).toStrictEqual(true);
    expect(isPrimitive({})).toStrictEqual(false);
    expect(isPrimitive(new Object())).toStrictEqual(false);
  });
});
