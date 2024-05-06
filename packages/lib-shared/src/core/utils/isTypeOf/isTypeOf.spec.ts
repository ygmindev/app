import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isTypeOf });

describe(displayName, () => {
  class X {}
  class Y {}

  test('works with string', async () => {
    expect(isTypeOf(new X(), 'X')).toStrictEqual(true);
    expect(isTypeOf(new Y(), 'X')).toStrictEqual(false);
  });

  test('works with constructor', async () => {
    expect(isTypeOf(new X(), X)).toStrictEqual(true);
    expect(isTypeOf(new Y(), X)).toStrictEqual(false);
  });
});
