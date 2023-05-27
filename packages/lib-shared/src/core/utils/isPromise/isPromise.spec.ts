import { isPromise } from '@lib/shared/core/utils/isPromise/isPromise';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isPromise });

describe(displayName, () => {
  test('works if true', async () => {
    const result = isPromise((async () => null)());
    expect(result).toStrictEqual(true);
  });

  test('works if false', async () => {
    const result = isPromise((() => null)());
    expect(result).toStrictEqual(false);
  });
});
